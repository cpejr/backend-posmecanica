const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');

module.exports = {
  async create(bank) {
    const bank_id = uuidv4();
    bank.bank_id = bank_id;
    const result = await connection('bank').insert(bank);
    return result;
  },

  async getAll() {
    const result = await connection('bank').select('*');
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
