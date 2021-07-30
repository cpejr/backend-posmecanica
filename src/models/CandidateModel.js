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
    if (field && filter) {
      candidateTable = await connection('candidate')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      candidateTable = Array.isArray(newFilter)
        ? arrayFilterWithOrCondition(candidateTable, field, newFilter)
        : candidateTable.filter((obj) => obj[field] === newFilter);
    } else {
      candidateTable = await connection('candidate')
        .select('*')
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
    const result = candidateTable;
    return result;
  },

  async getById(candidate_id) {
    const candidateObject = await connection('candidate')
      .where({ candidate_id })
      .select('*')
      .first();
    const processTable = await connection('selective_process')
      .where({ process_id: candidateObject.candidate_process_id })
      .select('*')
      .first();
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
};
