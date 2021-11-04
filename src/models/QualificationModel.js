const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

module.exports = {
  async create(qualification) {
    const result = await connection('qualification').insert(qualification);
    return result;
  },

  async getAll(times, field, filter) {
    let newFilter;
    if (filter === 'true') {
      newFilter = true;
    } else if (filter === 'false') {
      newFilter = false;
    } else {
      newFilter = filter;
    }
    const limit = 50;
    let qualification;

    if (field && filter) {
      qualification = await connection('qualification')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      qualification = Array.isArray(newFilter)
        ? arrayFilterWithOrCondition(qualification, field, newFilter)
        : qualification.filter((obj) => obj[field] === newFilter);
    } else {
      qualification = await connection('qualification')
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
    const defense = await connection('defense').select('defense_id');
    qualification.forEach((item) => {
      item.student = student.filter(
        (campo) => campo.stud_id === item.quali_stud_id
      )[0];
      item.bank = bank.filter(
        (campo) => campo.bank_id === item.quali_bank_id
      )[0];
      item.search_area = search_area.filter(
        (campo) => campo.search_area_id === item.quali_sArea_id
      )[0];
      item.defense = defense.filter(
        (campo) => campo.defense_id === item.quali_defense_id
      )[0];
      delete item.quali_stud_id;
      delete item.quali_bank_id;
      delete item.quali_sArea_id;
      delete item.quali_defense_id;
    });
    const result = qualification;
    return result;
  },

  async getByStudent(stud_id) {
    const qualification = await connection('qualification')
      .where({ quali_stud_id: stud_id })
      .first();
    const result = qualification;
    return result;
  },

  async getById(quali_id) {
    const qualification = await connection('qualification')
      .where({ quali_id })
      .first();
    const student = await connection('student')
      .where({ stud_id: qualification.quali_stud_id })
      .select('stud_id', 'stud_candidate_id')
      .first();
    qualification.student = student;
    const bank = await connection('bank')
      .where({ bank_id: qualification.quali_bank_id })
      .select('bank_id')
      .first();
    qualification.bank = bank;
    const search_area = await connection('search_area')
      .where({ search_area_id: qualification.quali_sArea_id })
      .select('search_area_id', 'search_area_name')
      .first();
    qualification.search_area = search_area;
    const defense = await connection('defense')
      .where({ defense_id: qualification.quali_defense_id })
      .select('defense_id', 'defense_title')
      .first();
    qualification.defense = defense;
    delete qualification.quali_stud_id;
    delete qualification.quali_bank_id;
    delete qualification.quali_sArea_id;
    delete qualification.quali_defense_id;

    const result = qualification;
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
