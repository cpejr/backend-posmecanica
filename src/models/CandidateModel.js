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
    candidateTable.candidate_PcD = !!candidateTable.candidate_PcD;
    console.log(
      '🚀 ~ file: CandidateModel.js ~ line 90 ~ getAll ~ candidateTable.candidate_PcD',
      candidateTable.candidate_PcD
    );
    const result = candidateTable;
    return result;
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
    return candidateObject;
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
    const result = candidateTable;
    return result;
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
