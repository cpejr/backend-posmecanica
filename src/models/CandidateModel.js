const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

const makeDisciplinesRelation = (
  candidate,
  disciplineTable,
  candidate_disciplineTable
) => {
  const relation = [];
  const disciplineRelation = candidate_disciplineTable.filter(
    (elements) => elements.cd_candidate_id === candidate.candidate_id
  );
  disciplineRelation.forEach((ids) => {
    relation.push(
      disciplineTable.find((element) => element.discipline_id === ids.cd_dis_id)
    );
  });
  candidate.disciplines = relation;
};

const makeCandidatesDisciplinesRelation = (
  candidate,
  candidate_disciplineTable
) => {
  const disciplineRelation = candidate_disciplineTable.filter(
    (elements) => elements.cd_candidate_id === candidate.candidate_id
  );
  candidate.candidate_disciplines = disciplineRelation;
};

const convertBoolean = (candidate) => {
  const fixObject = async (item) => {
    if (item?.candidate_ufmg_active_serv !== null)
      item.candidate_ufmg_active_serv = !!item.candidate_ufmg_active_serv;
    if (item?.candidate_ufmg_retired_serv !== null)
      item.candidate_ufmg_retired_serv = !!item.candidate_ufmg_retired_serv;
    if (item?.candidate_form_approval !== null)
      item.candidate_form_approval = !!item.candidate_form_approval;
    if (item?.candidate_approval !== null)
      item.candidate_approval = !!item.candidate_approval;
    if (item?.candidate_curriculum_approval !== null)
      item.candidate_curriculum_approval = !!item.candidate_curriculum_approval;
    if (item?.candidate_deferment !== null)
      item.candidate_deferment = !!item.candidate_deferment;
    if (item?.candidate_scholarship !== null)
      item.candidate_scholarship = !!item.candidate_scholarship;
    if (item?.candidate_PcD !== null) item.candidate_PcD = !!item.candidate_PcD;
  };

  if (candidate[1]) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of candidate) {
      fixObject(item);
    }
  } else {
    fixObject(candidate);
  }
  return candidate;
};

module.exports = {
  async create(candidate) {
    const result = await connection('candidate').insert(candidate);
    return result;
  },

  async getAll(times, field, filter) {
    let newFilter;
    if (filter === 'true') {
      newFilter = true;
    } else if (filter === 'false') {
      newFilter = false;
    } else {
      newFilter = filter;
    }
    const limit = 50;
    let candidateTable;
    if (field && newFilter) {
      candidateTable = await connection('candidate')
        .select('*')
        .leftJoin(
          'student',
          'candidate.candidate_id',
          'student.stud_candidate_id'
        )
        .whereNull('student.stud_candidate_id')
        .limit(limit)
        .offset(limit * times);
      candidateTable = Array.isArray(newFilter)
        ? arrayFilterWithOrCondition(candidateTable, field, newFilter)
        : candidateTable.filter((obj) => obj[field] === newFilter);
    } else {
      candidateTable = await connection('candidate')
        .select('*')
        .leftJoin(
          'student',
          'candidate.candidate_id',
          'student.stud_candidate_id'
        )
        .whereNull('student.stud_candidate_id')
        .limit(limit)
        .offset(limit * times);
    }
    const processTable = await connection('selective_process').select('*');
    const disciplineTable = await connection('discipline').select('*');
    const candidate_disciplineTable = await connection('candidate_dis');

    candidateTable.forEach((candidate) => {
      const relation = processTable.find(
        (element) => element.process_id === candidate.candidate_process_id
      );
      candidate.selective_process = relation;
      makeDisciplinesRelation(
        candidate,
        disciplineTable,
        candidate_disciplineTable
      );
    });

    return convertBoolean(candidateTable);
  },

  async getById(candidate_id) {
    const candidateObject = await connection('candidate')
      .where({ candidate_id })
      .select('*')
      .first();
    let processTable;
    if (candidateObject?.candidate_process_id) {
      processTable = await connection('selective_process')
        .where({ process_id: candidateObject.candidate_process_id })
        .select('*')
        .first();
    }
    const disciplineTable = await connection('discipline').select('*');
    const candidate_disciplineTable = await connection('candidate_dis');
    makeDisciplinesRelation(
      candidateObject,
      disciplineTable,
      candidate_disciplineTable
    );
    candidateObject.selective_process = processTable;
    return convertBoolean(candidateObject);
  },

  async getBySelectiveProcessId(candidate_process_id) {
    const candidateTable = await connection('candidate')
      .select('*')
      .where({ candidate_process_id })
      .where({ candidate_deferment: false });

    const candidate_disciplineTable = await connection(
      'candidate_dis'
    ).whereNull('cd_dis_deferment');

    candidateTable?.forEach((candidate) => {
      makeCandidatesDisciplinesRelation(candidate, candidate_disciplineTable);
    });

    return convertBoolean(candidateTable);
  },

  async verifyCandidateExistence(candidate_process_id, candidate_cpf) {
    let verify;
    const candidateTable = await connection('candidate')
      .where({ candidate_process_id })
      .where({ candidate_cpf })
      .select('candidate_id')
      .first();

    // eslint-disable-next-line no-unused-expressions
    candidateTable ? (verify = true) : (verify = false);

    return verify;
  },

  async updateById(candidate_id, candidate) {
    candidate.candidate_id = candidate_id;
    const result = await connection('candidate')
      .where({ candidate_id })
      .update(candidate);
    return result;
  },

  async deleteById(candidate_id) {
    const result = await connection('candidate')
      .where({ candidate_id })
      .delete();
    return result;
  },

  async verifyProtocolNumber(candidate_protocol_number) {
    const candidateObject = await connection('candidate')
      .where({ candidate_protocol_number })
      .select('*')
      .first();

    if (candidateObject) return true;
    return false;
  },
};
