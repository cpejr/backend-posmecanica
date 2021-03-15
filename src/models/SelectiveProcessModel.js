const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');
const { getAll, getById, updateById, deleteById } = require('./CandidateModel');

module.exports = {
  async create(process) {
    const process_id = uuidv4();
    process.process_id = process_id;
    const result = await connection('selective_process').insert(process);
    return result;
  },

  async getAll() {
    const result = await connection('selective_process').select('*');
    return result;
  },

  async getById(process_id) {
    const result = await connection('selective_process')
      .where({ process_id: process_id})
      .select('*');
    return result;
  },

  async updateById(process_id, process) {
    const result = await connection('selective_process')
      .where({ process_id: process_id })
      .update(process);
    return result;
  },

  async deleteById(process_id) {
    const result = await connection('selective_process')
      .where({ process_id: process_id })
      .delete();
    return result;
  },
};
