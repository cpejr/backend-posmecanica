const connection = require('../database/connection');

module.exports = {
  async create(professor) {
    const result = await connection('professor').insert(professor);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let profTable;

    if (field && filter) {
      profTable = await connection('professor')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      profTable = await connection('professor')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const bankTable = await connection('bank').select('*');
    const bank_profTable = await connection('bank_professor');
    profTable.forEach((professor) => {
      const relation = [];
      const bankRelation = bank_profTable.filter(
        (elements) => elements.bp_professor_id === professor.prof_id
      );
      bankRelation.forEach((ids) => {
        relation.push(
          bankTable.find((element) => element.bank_id === ids.bp_bank_id)
        );
      });
      professor.banks = relation;
    });
    const result = profTable;
    return result;
  },

  async getById(prof_id) {
    const relation = [];
    const bankTable = await connection('bank').select('*');
    const profObject = await connection('professor')
      .where({ prof_id })
      .select('*')
      .first();
    const bankRelation = await connection('bank_professor')
      .where({
        bp_professor_id: prof_id,
      })
      .select('bp_bank_id');
    bankRelation.forEach((ids) => {
      relation.push(
        bankTable.find((element) => element.bank_id === ids.bp_bank_id)
      );
    });
    const result = profObject;
    result.banks = relation;
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
