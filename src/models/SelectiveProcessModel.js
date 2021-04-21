const connection = require('../database/connection');

module.exports = {
  async create(selective_process) {
    const result = await connection('selective_process').insert(
      selective_process
    );
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let selective_process;
    if (field && filter) {
      selective_process = await connection('selective_process')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      selective_process = await connection('selective_process')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const candidate = await connection('candidate').select(
      'candidate_id',
      'candidate_name',
      'candidate_process_id'
    );

    selective_process.forEach((item) => {
      const processFilter = candidate.filter(
        (campo) => campo.candidate_process_id === item.process_id
      );
      processFilter.forEach((campo) => {
        delete campo.candidate_process_id;
      });
      item.count_candidates = processFilter.length;
      item.candidates = processFilter;
    });
    const result = selective_process;
    return result;
  },

  async getById(process_id) {
    const selective_process = await connection('selective_process')
      .where({ process_id })
      .first();
    const candidate = await connection('candidate')
      .where({ candidate_process_id: process_id })
      .select('candidate_id', 'candidate_name');
    selective_process.count_candidates = candidate.length;
    selective_process.candidates = candidate;
    const result = selective_process;
    return result;
  },

  async updateById(process_id, selective_process) {
    const result = await connection('selective_process')
      .where({ process_id })
      .update(selective_process);
    return result;
  },

  async deleteById(process_id) {
    const result = await connection('selective_process')
      .where({ process_id })
      .delete();
    return result;
  },
};
