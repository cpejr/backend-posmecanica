const connection = require('../database/connection');

module.exports = {
  async create(candidate) {
    const result = await connection('candidate').insert(candidate);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let candidateTable;
    if (field && filter) {
      candidateTable = await connection('candidate')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      candidateTable = await connection('candidate')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const processTable = await connection('selective_process').select('*');

    candidateTable.forEach((candidate) => {
      const relation = processTable.find(
        (element) => element.process_id === candidate.candidate_process_id
      );
      candidate.selective_process = relation;
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
