const connection = require('../database/connection');

module.exports = {
  async create(qualification) {
    const result = await connection('qualification').insert(qualification);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let qualification;

    if (field && filter) {
      qualification = await connection('qualification')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
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
      delete item.quali_stud_id;
      delete item.quali_bank_id;
      delete item.quali_sArea_id;
    });
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
    delete qualification.quali_stud_id;
    delete qualification.quali_bank_id;
    delete qualification.quali_sArea_id;
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
