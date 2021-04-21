const connection = require('../database/connection');

const recoverCandidateInfos = (student, candidate) => {
  const filteredCandidate = candidate.filter(
    (campo) => campo.candidate_id === student.stud_candidate_id
  );
  delete student.stud_candidate_id;
  Object.keys(filteredCandidate[0]).forEach((campo) => {
    const newName = campo.toString().replace('candidate', 'stud_candidate');
    student[newName] = filteredCandidate[0][campo];
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

module.exports = {
  async create(student) {
    const result = await connection('student').insert(student);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let students;
    if (filter && field) {
      students = await connection('student')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      students = await connection('student')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const candidate = await connection('candidate').select('*');
    const disciplineTable = await connection('discipline').select('*');
    const stud_discTable = await connection('student_dis');

    students.forEach((item) => {
      recoverCandidateInfos(item, candidate);
      makeDisciplinesRelation(item, disciplineTable, stud_discTable);
    });
    const result = students;
    return result;
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
    const result = student;
    return result;
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
    const result = await connection('student')
      .where(fields)
      .select('*')
      .first();
    return result;
  },
};
