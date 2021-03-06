const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

module.exports = {
  async create(bank) {
    const result = await connection('bank').insert(bank);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let bankTable;
    if (field && filter) {
      bankTable = await connection('bank')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      bankTable = Array.isArray(filter)
        ? arrayFilterWithOrCondition(bankTable, field, filter)
        : bankTable.filter((obj) => obj[field] === filter);
    } else {
      bankTable = await connection('bank')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const profTable = await connection('professor').select(
      'prof_id',
      'prof_name',
      'prof_email'
    );
    const bank_profTable = await connection('bank_professor');
    bankTable.forEach((bank) => {
      const relation = [];
      const profRelation = bank_profTable.filter(
        (elements) => elements.bp_bank_id === bank.bank_id
      );
      profRelation.forEach((ids) => {
        relation.push(
          profTable.find((element) => element.prof_id === ids.bp_professor_id)
        );
      });
      bank.professors = relation;
    });
    const result = bankTable;
    return result;
  },

  async getById(bank_id) {
    const relation = [];
    const professorTable = await connection('professor').select(
      'prof_id',
      'prof_name',
      'prof_email'
    );
    const bankObject = await connection('bank')
      .where({ bank_id })
      .select('*')
      .first();
    const professorRelation = await connection('bank_professor')
      .where({
        bp_bank_id: bank_id,
      })
      .select('bp_professor_id');
    professorRelation.forEach((ids) => {
      relation.push(
        professorTable.find(
          (element) => element.prof_id === ids.bp_professor_id
        )
      );
    });
    const result = bankObject;
    result.professors = relation;
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
