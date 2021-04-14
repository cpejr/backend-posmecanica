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

    const disciplineTable = await connection('discipline').select('*');
    const prof_discTable = await connection('professor_discipline');

    profTable.forEach((professor) => {
      const relation = [];
      const discRelation = prof_discTable.filter(
        (elements) => elements.pd_professor_id === professor.prof_id
      );
      discRelation.forEach((ids) => {
        relation.push(
          disciplineTable.find(
            (element) => element.discipline_id === ids.pd_dis_id
          )
        );
      });
      professor.disciplines = relation;
    });

    const search_areaTable = await connection('search_area').select('*');
    const searchArea_profTable = await connection('searchArea_Professor');

    profTable.forEach((professor) => {
      const relation = [];
      const searchAreaRelation = searchArea_profTable.filter(
        (elements) => elements.sp_professor_id === professor.prof_id
      );
      searchAreaRelation.forEach((ids) => {
        relation.push(
          search_areaTable.find(
            (element) => element.discipline_id === ids.sp_searchArea_id
          )
        );
      });
      professor.searchAreas = relation;
    });

    const result = profTable;
    return result;
  },

  async getById(prof_id) {
    const relationBP = [];
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
      relationBP.push(
        bankTable.find((element) => element.bank_id === ids.bp_bank_id)
      );
    });
    profObject.banks = relationBP;

    const relationPD = [];
    const disciplineTable = await connection('discipline').select('*');
    const prof_discTable = await connection('professor_discipline');
    const discRelation = prof_discTable.filter(
      (elements) => elements.pd_professor_id === profObject.prof_id
    );
    discRelation.forEach((ids) => {
      relationPD.push(
        disciplineTable.find(
          (element) => element.discipline_id === ids.pd_dis_id
        )
      );
    });
    profObject.disciplines = relationPD;

    const relationPSA = [];
    const search_areaTable = await connection('search_area').select('*');
    const searchArea_profTable = await connection('searchArea_Professor');
    const searchAreaRelation = searchArea_profTable.filter(
      (elements) => elements.sp_professor_id === profObject.prof_id
    );
    searchAreaRelation.forEach((ids) => {
      relationPSA.push(
        search_areaTable.find(
          (element) => element.search_area_id === ids.sp_searchArea_id
        )
      );
    });
    profObject.searchAreas = relationPSA;

    const result = profObject;
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
