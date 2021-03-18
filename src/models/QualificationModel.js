const connection = require('../database/connection');

module.exports = {
  async create(qualification) {
    const result = await connection('qualification').insert(qualification);
    return result;
  },

  async getAll() {
    const result = await connection('qualification').select('*');
    return result;
  },

  async getById(quali_id) {
    const result = await connection('qualification')
      .where({ quali_id })
      .select('*');
    return result;
  },

  async updateById(quali_id, qualification) {
    const result = await connection('qualification')
      .where({ quali_id })
      .update(qualification);
    return result;
  },

  async deleteById(quali_id) {
    const result = await connection('qualification')
      .where({ quali_id })
      .delete();
    return result;
  },
};
