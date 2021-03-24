const connection = require('../database/connection');

module.exports = {
  async create(bank) {
    const result = await connection('bank').insert(bank);
    return result;
  },

  async getAll(times) {
    const limit = 50;
    const result = await connection('bank')
      .select('*')
      .limit(limit)
      .offset(limit * times);
    return result;
  },

  async getById(bank_id) {
    const result = await connection('bank').where({ bank_id }).select('*');
    return result;
  },

  async updateById(bank_id, bank) {
    const result = await connection('bank').where({ bank_id }).update(bank);
    return result;
  },

  async deleteById(bank_id) {
    const result = await connection('bank').where({ bank_id }).delete();
    return result;
  },
};
