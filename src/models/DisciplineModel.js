const connection = require('../database/connection');

module.exports = {
  async create(discipline) {
    const result = await connection('discipline').insert(discipline);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let disciplineTable;
    if (field && filter) {
      disciplineTable = await connection('discipline')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      disciplineTable = await connection('discipline')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const professorTable = await connection('professor').select(
      'prof_id',
      'prof_name',
      'prof_email'
    );
    const prof_discTable = await connection('professor_discipline');

    disciplineTable.forEach((discipline) => {
      const relation = [];
      const profRelation = prof_discTable.filter(
        (elements) => elements.pd_dis_id === discipline.discipline_id
      );
      profRelation.forEach((ids) => {
        relation.push(
          professorTable.find(
            (element) => element.prof_id === ids.pd_professor_id
          )
        );
      });
      discipline.professors = relation;
    });

    const studentTable = await connection("student").select("*")
    const stud_discTable = await connection('student_dis');

    disciplineTable.forEach((discipline) => {
      const relation = [];
      const studRelation = stud_discTable.filter(
        (elements) => elements.sd_dis_id === discipline.discipline_id
      );
      studRelation.forEach((ids) => {
        relation.push(
          studentTable.find(
            (student) => student.stud_id === ids.sd_student_id
          )
        );
      });
      discipline.students = relation;
    });
    
    const searchAreaTable = await connection('search_area').select('*');
    const searchArea_discTable = await connection('search_area_discipline');

    disciplineTable.forEach((discipline) => {
      const relation = [];
      const searchAreaRelation = searchArea_discTable.filter(
        (elements) => elements.sAd_dis_id === discipline.discipline_id
      );
      searchAreaRelation.forEach((ids) => {
        relation.push(
          searchAreaTable.find(
            (search_area) => search_area.search_area_id === ids.sAd_research_id
          )
        );
      });
      discipline.searchAreas = relation;
    });
    
    const result = disciplineTable;
    return result;
  },

  async getById(discipline_id) {
    const disciplineObject = await connection('discipline')
      .where({ discipline_id })
      .select('*')
      .first();
    const studentTable = await connection("student").select('*');
    const stud_discTable = await connection("student_dis")
      .where({ sd_dis_id: discipline_id })
      .select("*")
    const relations = [];

    const profRelation = prof_discTable.filter(
      (elements) => elements.pd_dis_id === disciplineObject.discipline_id
    );
    profRelation.forEach((ids) => {
      relations.push(
        professorTable.find(
          (element) => element.prof_id === ids.pd_professor_id
        )
      );
    });
    disciplineObject.professors = relations;

    const relacoes = [];
    stud_discTable.forEach((ids) => {
      relacoes.push(
        studentTable.find(
          (element) => { element.stud.id === ids.sd_student_id })
      )
    })
    const result = disciplineObject;
    result.students = relacoes;
    return result;
  },

  async updateById(discipline_id, discipline) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .update(discipline);
    return result;
  },

  async deleteById(discipline_id) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .delete();
    return result;
  },
};
