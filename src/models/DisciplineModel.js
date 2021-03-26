const connection = require('../database/connection');

module.exports = {
  async create(discipline) {
    const result = await connection('discipline').insert(discipline);
    return result;
  },

  async getAll() {
    const result = await connection('discipline').select('*');
    return result;
  },

  async getById(discipline_id) {
    const result = await connection('discipline').where({ discipline_id }).select('*');
    return result;
  },

  async updateById(discipline_id, discipline) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .update(discipline);
    return result;
  },

  async deleteById(discipline_id) {
    const result = await connection('discipline').where({ discipline_id }).delete();
    return result;
  },
};