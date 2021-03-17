const connection = require('../database/connection');

module.exports = {
  async create(professor) {
    const result = await connection('professor').insert(professor);
    return result;
  },

  async getAll() {
    const result = await connection('professor').select('*');
    return result;
  },

  async getById(prof_id) {
    const result = await connection('professor').where({ prof_id }).select('*');
    return result;
  },

  async updateById(prof_id, professor) {
    const result = await connection('professor')
      .where({ prof_id })
      .update(professor);
    return result;
  },

  async deleteById(prof_id) {
    const result = await connection('professor').where({ prof_id }).delete();
    return result;
  },
};
