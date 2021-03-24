const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');

module.exports = {
  async create(selective_process) {
    const process_id = uuidv4();
    selective_process.process_id = process_id;
    const result = await connection('selective_process').insert(
      selective_process
    );
    return result;
  },

  async getAll() {
    const selective_process = await connection('selective_process').select('*');
    const candidate = await connection('candidate').select(
      'candidate_id',
      'candidate_name',
      'candidate_process_id'
    );
    selective_process.forEach((item) => {
      item.candidate = candidate.filter(
        (campo) => campo.candidate_process_id === item.process_id
      );
      item.candidate.forEach((campo) => delete campo.candidate_process_id);
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
    selective_process.candidate = candidate;
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
