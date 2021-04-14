const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');

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
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      searchTable = await connection('search_area')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const disciplineTable = await connection('discipline').select('*');
    const search_disciTable = await connection('search_area_discipline');

    searchTable.forEach((search) => {
      const relation = [];
      const disciRelation = search_disciTable.filter(
        (elements) => search.search_area_id === elements.sAd_research_id
      );
      disciRelation.forEach((ids) => {
        relation.push(
          disciplineTable.find(
            (element) => element.discipline_id === ids.sAd_dis_id
          )
        );
      });
      search.discipline = relation;
    });

    const professorTable = await connection('professor').select('*');
    const searchArea_professorTable = await connection('searchArea_Professor');

    searchTable.forEach((search) => {
      const relation = [];
      const profRelation = searchArea_professorTable.filter(
        (elements) => search.search_area_id === elements.sp_searchArea_id
      );
      profRelation.forEach((ids) => {
        relation.push(
          professorTable.find(
            (element) => element.prof_id === ids.sp_professor_id
          )
        );
      });
      search.professors = relation;
    });

    const result = searchTable;
    return result;
  },

  async getById(search_area_id) {
    const relationDSA = [];
    const search_areaObject = await connection('search_area')
      .where({ search_area_id })
      .select('*')
      .first();
    const disciplineTable = await connection('discipline').select("*")
    const searchArea_discTable = await connection('search_area_discipline')
    const disciplineRelation = searchArea_discTable.filter(
      elements => elements.sAd_search_id === search_areaObject.search_area_id
    )
    disciplineRelation.forEach((ids) => {
      relationDSA.push(
        disciplineTable.find(
          element => element.discipline_id === ids.sAd_dis_id
        )
      );
    });
    search_areaObject.disciplines = relationDSA;

    const relationPSA = [];
    const professorTable = await connection('professor').select("*")
    const searchArea_profTable = await connection('searchArea_Professor')
    const professorRelation = searchArea_profTable.filter(
      elements => elements.sp_searchArea_id === search_areaObject.search_area_id
    )
    professorRelation.forEach((ids) => {
      relationPSA.push(
        professorTable.find(
          element => element.professor_id === ids.sp_professor_id
        )
      );
    });
    search_areaObject.professors = relationPSA;

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
