const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

module.exports = {
  async create(defense) {
    const result = await connection('defense').insert(defense);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let defense;
    if (field && filter) {
      defense = await connection('defense')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      defense = Array.isArray(filter)
        ? arrayFilterWithOrCondition(defense, field, filter)
        : defense.filter((obj) => obj[field] === filter);
    } else {
      defense = await connection('defense')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const student = await connection('student').select(
      'stud_id',
      'stud_candidate_id'
    );
    const bank = await connection('bank').select('bank_id');
    const search_area = await connection('search_area').select(
      'search_area_id',
      'search_area_name'
    );
    defense.forEach((item) => {
      item.bank = bank.filter(
        (campo) => campo.bank_id === item.defense_bank_id
      )[0];
      item.search_area = search_area.filter(
        (campo) => campo.search_area_id === item.defense_sArea_id
      )[0];
      item.student = student.filter(
        (campo) => campo.stud_id === item.defense_stud_id
      )[0];
      delete item.defense_bank_id;
      delete item.defense_sArea_id;
      delete item.defense_stud_id;
    });
    return defense;
  },

  async getById(defense_id) {
    const defense = await connection('defense')
      .where({ defense_id })
      .select('*')
      .first();
    const student = await connection('student')
      .where({ stud_id: defense.defense_stud_id })
      .select('stud_id', 'stud_candidate_id')
      .first();
    defense.student = student;
    const bank = await connection('bank')
      .where({ bank_id: defense.defense_bank_id })
      .select('bank_id')
      .first();
    defense.bank = bank;
    const search_area = await connection('search_area')
      .where({ search_area_id: defense.defense_sArea_id })
      .select('search_area_id', 'search_area_name')
      .first();
    defense.search_area = search_area;
    delete defense.defense_stud_id;
    delete defense.defense_bank_id;
    delete defense.defense_sArea_id;
    const result = defense;
    return result;
  },

  async getByStudent(stud_id) {
    const defense = await connection('defense')
      .where({ defense_stud_id: stud_id })
      .first();
      const result = defense;
      return result;
  },

  async updateById(defense_id, defense) {
    const result = await connection('defense')
      .where({ defense_id })
      .update(defense);
    return result;
  },

  async deleteById(defense_id) {
    const result = await connection('defense').where({ defense_id }).delete();
    return result;
  },
};
