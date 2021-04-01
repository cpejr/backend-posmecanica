const connection = require('../database/connection');

module.exports = {
  async create(discipline) {
    const result = await connection('discipline').insert(discipline);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let result;
    if (field && filter) {
      result = await connection('discipline')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      result = await connection('discipline')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }

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
