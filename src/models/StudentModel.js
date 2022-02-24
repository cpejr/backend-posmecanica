const connection = require('../database/connection');
const CandidateModel = require('./CandidateModel');
const { arrayFilterWithOrCondition } = require('./utils/Methods');

const recoverCandidateInfos = async (student) => {
  const filteredCandidate = await CandidateModel.getById(
    student.stud_candidate_id
  );
  delete student.stud_candidate_id;
  Object.keys(filteredCandidate).forEach((campo) => {
    const newName = campo.toString().replace('candidate', 'stud_candidate');
    student[newName] = filteredCandidate[campo];
  });
};

const makeDisciplinesRelation = (student, disciplineTable, stud_discTable) => {
  const relation = [];
  const disciplineRelation = stud_discTable.filter(
    (elements) => elements.sd_student_id === student.stud_id
  );
  disciplineRelation.forEach((ids) => {
    relation.push(
      disciplineTable.find((element) => element.discipline_id === ids.sd_dis_id)
    );
  });
  student.disciplines = relation;
};

const convertBoolean = (student) => {
  const fixObject = (item) => {
    if (item?.stud_scholarschip !== null)
      item.stud_scholarschip = !!item.stud_scholarschip;
    if (item?.stud_workplane !== null)
      item.stud_workplane = !!item.stud_workplane;
  };
  if (student[1]) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of student) {
      fixObject(item);
    }
  } else {
    fixObject(student);
  }
  return student;
};

module.exports = {
  async create(student) {
    const result = await connection('student').insert(student);
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
    let students;
    if (filter && field) {
      students = await connection('student')
        .select('*')
        .limit(limit)
        .offset(limit * times);
      students = Array.isArray(newFilter)
        ? arrayFilterWithOrCondition(students, field, newFilter)
        : students.filter((obj) => obj[field] === newFilter);
    } else {
      students = await connection('student')
        .select('*')
        .limit(limit)
        .offset(limit * times)
        .innerJoin(
          'candidate',
          'student.stud_candidate_id',
          'candidate.candidate_id'
        )
        .innerJoin(
          'selective_process',
          'candidate.candidate_process_id',
          'selective_process.process_id'
        );
    }
    const disciplineTable = await connection('discipline').select('*');
    const stud_discTable = await connection('student_dis');
    const processTable = await connection('selective_process').select('*');

    students.forEach((item) => {
      const relation = processTable.find(
        (element) => element.process_id === item.candidate_process_id
      );
      item.selective_process = relation;
      makeDisciplinesRelation(item, disciplineTable, stud_discTable);
      delete item.stud_candidate_id;
    });
    return convertBoolean(students);
  },

  async getById(stud_id) {
    const student = await connection('student')
      .where({ stud_id })
      .select('*')
      .first();
    const disciplineTable = await connection('discipline').select('*');
    const candidateTable = await connection('candidate').select('*');
    const stud_discTable = await connection('student_dis').select('*');
    recoverCandidateInfos(student, candidateTable);
    makeDisciplinesRelation(student, disciplineTable, stud_discTable);

    return convertBoolean(student);
  },

  async updateById(stud_id, student) {
    const result = await connection('student')
      .where({ stud_id })
      .update(student);
    return result;
  },

  async deleteById(stud_id) {
    const result = await connection('student').where({ stud_id }).delete();
    return result;
  },

  async getByFields(fields) {
    const student = await connection('student')
      .where(fields)
      .select('*')
      .first();
    const disciplineTable = await connection('discipline').select('*');
    const candidateTable = await connection('candidate').select('*');
    const stud_discTable = await connection('student_dis').select('*');
    recoverCandidateInfos(student, candidateTable);
    makeDisciplinesRelation(student, disciplineTable, stud_discTable);

    return convertBoolean(student);
  },
};
