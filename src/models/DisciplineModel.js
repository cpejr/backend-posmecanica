const connection = require('../database/connection');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

const makeProfessorRelation = (discipline, professorTable, prof_discTable) => {
  const relation = [];
  const profRelation = prof_discTable.filter(
    (elements) => elements.pd_dis_id === discipline.discipline_id
  );
  profRelation.forEach((ids) => {
    relation.push(
      professorTable.find((element) => element.prof_id === ids.pd_professor_id)
    );
  });
  discipline.professors = relation;
};

const makeStudentRelation = (discipline, studentTable, stud_discTable) => {
  const relation = [];
  const studRelation = stud_discTable.filter(
    (elements) => elements.sd_dis_id === discipline.discipline_id
  );
  studRelation.forEach((ids) => {
    relation.push(
      studentTable.find((student) => student.stud_id === ids.sd_student_id)
    );
  });
  discipline.students = relation;
};

const makeSearchAreaRelation = (
  discipline,
  searchAreaTable,
  searchArea_discTable
) => {
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
};

const convertBoolean = (disciplineRelation) => {
  const fixObject = (item) => {
    if (item?.discipline_is_isolated !== null)
      item.discipline_is_isolated = !!item.discipline_is_isolated;
    if (item?.discipline_iso_approved !== null)
      item.discipline_iso_approved = !!item.discipline_iso_approved;
  };
  if (disciplineRelation[1]) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of disciplineRelation) {
      fixObject(item);
    }
  } else {
    fixObject(disciplineRelation);
  }
  return disciplineRelation;
};

module.exports = {
  async create(discipline) {
    const result = await connection('discipline').insert(discipline);
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
    let disciplineTable;
    if (field && filter) {
      disciplineTable = await connection('discipline')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      disciplineTable = Array.isArray(newFilter)
        ? arrayFilterWithOrCondition(disciplineTable, field, newFilter)
        : disciplineTable.filter((obj) => obj[field] === newFilter);
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
    const studentTable = await connection('student').select('*');
    const stud_discTable = await connection('student_dis');
    const searchAreaTable = await connection('search_area').select('*');
    const searchArea_discTable = await connection('search_area_discipline');

    disciplineTable.forEach((discipline) => {
      makeProfessorRelation(discipline, professorTable, prof_discTable);
      makeStudentRelation(discipline, studentTable, stud_discTable);
      makeSearchAreaRelation(discipline, searchAreaTable, searchArea_discTable);
    });

    return convertBoolean(disciplineTable);
  },

  async getById(discipline_id) {
    const disciplineObject = await connection('discipline')
      .where({ discipline_id })
      .select('*')
      .first();
    const professorTable = await connection('professor').select('*');
    const prof_discTable = await connection('professor_discipline').select('*');
    const studentTable = await connection('student').select('*');
    const stud_discTable = await connection('student_dis').select('*');
    const searchAreaTable = await connection('search_area').select('*');
    const searchArea_discTable = await connection(
      'search_area_discipline'
    ).select('*');

    makeProfessorRelation(disciplineObject, professorTable, prof_discTable);
    makeStudentRelation(disciplineObject, studentTable, stud_discTable);
    makeSearchAreaRelation(
      disciplineObject,
      searchAreaTable,
      searchArea_discTable
    );

    return convertBoolean(disciplineObject);
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
