const connection = require('../database/connection');

module.exports = {
  async create(professor) {
    const result = await connection('professor').insert(professor);
    return result;
  },

  async getAll(times) {
    const limit = 50;
    const result = await connection('professor')
      .select('*')
      .limit(limit)
      .offset(limit * times);
    return result;
  },

  async getById(prof_id) {
    const result = await connection('professor')
      .where({ prof_id })
      .select('*')
      .first();
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

  async getByFields(fields) {
    const result = await connection('professor')
      .where(fields)
      .select('*')
      .first();
    return result;
  },
};
