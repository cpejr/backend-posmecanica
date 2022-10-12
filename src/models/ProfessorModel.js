const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

const makeBankRelation = (professor, bankTable, bank_profTable) => {
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
};

const makeDisciplineRelation = (professor, disciplineTable, prof_discTable) => {
  const relation = [];
  const discRelation = prof_discTable.filter(
    (elements) => elements.pd_professor_id === professor.prof_id
  );
  discRelation.forEach((ids) => {
    relation.push(
      disciplineTable.find((element) => element.discipline_id === ids.pd_dis_id)
    );
  });
  professor.disciplines = relation;
};

const makeSearchAreaRelation = (
  professor,
  search_areaTable,
  searchArea_profTable
) => {
  const relation = [];
  const searchAreaRelation = searchArea_profTable.filter(
    (elements) => elements.sp_professor_id === professor.prof_id
  );
  searchAreaRelation.forEach((ids) => {
    relation.push(
      search_areaTable.find(
        (element) => element.search_area_id === ids.sp_searchArea_id
      )
    );
  });
  professor.searchAreas = relation;
};

const convertBoolean = (professorRelation) => {
  const fixObject = (item) => {
    if (item?.prof_active !== null) item.prof_active = !!item.prof_active;
    if (item?.prof_credential !== null)
      item.prof_credential = !!item.prof_credential;
  };
  if (professorRelation[1]) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of professorRelation) {
      fixObject(item);
    }
  } else {
    fixObject(professorRelation);
  }
  return professorRelation;
};

module.exports = {
  async create(professor) {
    const result = await connection('professor').insert(professor);
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
    let profTable;
    if (field && filter) {
      profTable = await connection('professor')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      profTable = Array.isArray(newFilter)
        ? arrayFilterWithOrCondition(profTable, field, newFilter)
        : profTable.filter((obj) => obj[field] === newFilter);
    } else {
      profTable = await connection('professor')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const bankTable = await connection('bank').select('*');
    const bank_profTable = await connection('bank_professor');
    const disciplineTable = await connection('discipline').select('*');
    const prof_discTable = await connection('professor_discipline');
    const search_areaTable = await connection('search_area').select('*');
    const searchArea_profTable = await connection('searchArea_professor');

    profTable.forEach((professor) => {
      makeBankRelation(professor, bankTable, bank_profTable);
      makeDisciplineRelation(professor, disciplineTable, prof_discTable);
      makeSearchAreaRelation(professor, search_areaTable, searchArea_profTable);
    });

    return convertBoolean(profTable);
  },

  async getById(prof_id) {
    const profObject = await connection('professor')
      .where({ prof_id })
      .select('*')
      .first();
    const bankTable = await connection('bank').select('*');
    const bank_profTable = await connection('bank_professor').select(
      'bp_bank_id'
    );
    const disciplineTable = await connection('discipline').select('*');
    const prof_discTable = await connection('professor_discipline');
    const search_areaTable = await connection('search_area').select('*');
    const searchArea_profTable = await connection('searchArea_professor');

    makeBankRelation(profObject, bankTable, bank_profTable);
    makeDisciplineRelation(profObject, disciplineTable, prof_discTable);
    makeSearchAreaRelation(profObject, search_areaTable, searchArea_profTable);

    return convertBoolean(profObject);
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
    return convertBoolean(result);
  },

  async getProfByDisciplineId(discipline_id) {
    const aux = await connection('professor_discipline')
      .where('pd_dis_id', discipline_id)
      .select('*')
      .first();
    const result = await connection('professor')
      .where('prof_id', aux.pd_professor_id)
      .select('*')
      .first();
    const disciplineIds = await connection('professor_discipline')
      .where('pd_professor_id', aux.pd_professor_id)
      .select('*');

    const disciplines = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const element of disciplineIds) {
      // eslint-disable-next-line no-await-in-loop
      const e = await connection('discipline')
        .where('discipline_id', element.pd_dis_id)
        .select('*')
        .first();
      disciplines.push(e);
    }

    result.disciplines = disciplines;
    return convertBoolean(result);
  },
};
