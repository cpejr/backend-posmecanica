const connection = require('../database/connection');

module.exports = {
  async create(student) {
    const result = await connection('student').insert(student);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let student;
    if (filter && field) {
      student = await connection('student')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      student = await connection('student')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }

    const candidate = await connection('candidate').select('*');
    const disciplineTable = await connection('discipline').select('*');
    const stud_discTable = await connection('student_dis');

    student.forEach((item) => {
      const filteredCandidate = candidate.filter(
        (campo) => campo.candidate_id === item.stud_candidate_id
      );
      delete student.stud_candidate_id;
      Object.keys(filteredCandidate[0]).forEach((campo) => {
        const newName = campo.toString().replace('candidate', 'stud_candidate');
        item[newName] = filteredCandidate[0][campo];
      });

      student.forEach((student) => {
        const relation = [];
        const relationTable = stud_discTable.filter(
          (elements) => elements.sd_student_id === student.stud.id
        );
        relationTable.forEach((ids) => {
          relation.push(
            disciplineTable.find(
              (element) => {
                element.discipline_id === ids.sd_dis_id
              })
          )
        })
        student.disciplines = relation;
      })
    });
    const result = student;
    return result;
  },

  async getById(stud_id) {
    const disciplineTable = await connection('discipline').select('*');
    const student = await connection('student')
      .where({ stud_id })
      .innerJoin(
        'candidate',
        'candidate.candidate_id',
        'student.stud_candidate_id'
      )
      .select('*')
      .first();
    delete student.stud_candidate_id;
    const stud_discTable = await connection('student_dis').where({ sd_student_id: stud_id }).select("*");
    Object.keys(student).forEach((item) => {
      if (item.includes('candidate')) {
        const newName = item.toString().replace('candidate', 'stud_candidate');
        student[newName] = student[item];
        delete student[item];
      }
    });
    const relations = [];
    stud_discTable.forEach((ids) => {
      relations.push(
        disciplineTable.find(
          (element) => { element.discipline.id === ids.sd_dis_id })
      )
    })
    const result = student;
    result.disciplines = relations;
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
