const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

const makeProfessorRelation = (
  searchArea,
  professorTable,
  searchArea_professorTable
) => {
  const relation = [];
  const profRelation = searchArea_professorTable.filter(
    (elements) => searchArea.search_area_id === elements.sp_searchArea_id
  );
  profRelation.forEach((ids) => {
    relation.push(
      professorTable.find((element) => element.prof_id === ids.sp_professor_id)
    );
  });
  searchArea.professors = relation;
};

const makeDisciplineRelation = (
  searchArea,
  disciplineTable,
  search_disciTable
) => {
  const relation = [];
  const disciRelation = search_disciTable.filter(
    (elements) => searchArea.search_area_id === elements.sAd_research_id
  );
  disciRelation.forEach((ids) => {
    relation.push(
      disciplineTable.find(
        (element) => element.discipline_id === ids.sAd_dis_id
      )
    );
  });
  searchArea.discipline = relation;
};

module.exports = {
  async create(search_area) {
    const search_area_id = uuidv4();
    search_area.search_area_id = search_area_id;
    const result = await connection('search_area').insert(search_area);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let searchTable;
    if (field && filter) {
      searchTable = await connection('search_area')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      searchTable = Array.isArray(filter)
        ? arrayFilterWithOrCondition(searchTable, field, filter)
        : searchTable.filter((obj) => obj[field] === filter);
    } else {
      searchTable = await connection('search_area')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const disciplineTable = await connection('discipline').select('*');
    const professorTable = await connection('professor').select('*');
    const search_disciTable = await connection('search_area_discipline');
    const searchArea_professorTable = await connection('searchArea_professor');

    searchTable.forEach((searchArea) => {
      makeProfessorRelation(
        searchArea,
        professorTable,
        searchArea_professorTable
      );
      makeDisciplineRelation(searchArea, disciplineTable, search_disciTable);
    });
    const result = searchTable;
    return result;
  },

  async getById(search_area_id) {
    const search_areaObject = await connection('search_area')
      .where({ search_area_id })
      .select('*')
      .first();
    const disciplineTable = await connection('discipline').select('*');
    const professorTable = await connection('professor').select('*');
    const searchArea_discTable = await connection('search_area_discipline');
    const searchArea_profTable = await connection('searchArea_professor');
    makeProfessorRelation(
      search_areaObject,
      professorTable,
      searchArea_profTable
    );
    makeDisciplineRelation(
      search_areaObject,
      disciplineTable,
      searchArea_discTable
    );
    const result = search_areaObject;
    return result;
  },

  async updateById(search_area_id, search_area) {
    const result = await connection('search_area')
      .where({ search_area_id })
      .update(search_area);
    return result;
  },

  async deleteById(search_area_id) {
    const result = await connection('search_area')
      .where({ search_area_id })
      .delete();
    return result;
  },
};
