const connection = require('../database/connection');

module.exports = {
  async create(discipline) {
    const result = await connection('discipline').insert(discipline);
    return result;
  },

  async getAll(times) {
    const limit = 50;
    const result = await connection('discipline')
      .select('*')
      .limit(limit)
      .offset(limit * times);
    return result;
  },

  async getById(discipline_id) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .select('*')
      .first();
    return result;
  },

  async updateById(discipline_id, discipline) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .update(discipline);
    return result;
  },

  async deleteById(discipline_id) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .delete();
    return result;
  },
};
