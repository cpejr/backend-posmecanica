const connection = require('../database/connection');

module.exports = {
  async create(student) {
    const result = await connection('student').insert(student);
    return result;
  },

  async getAll() {
    const student = await connection('student').select('*');
    const candidate = await connection('candidate').select('*');
    student.forEach((item) => {
      const filteredCandidate = candidate.filter(
        (campo) => campo.candidate_id === item.stud_candidate_id
      );
      delete student.stud_candidate_id;
      Object.keys(filteredCandidate[0]).forEach((campo) => {
        const newName = campo.toString().replace('candidate', 'stud_candidate');
        item[newName] = filteredCandidate[0][campo];
      });
    });
    const result = student;
    return result;
  },

  async getById(stud_id) {
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
    Object.keys(student).forEach((item) => {
      if (item.includes('candidate')) {
        const newName = item.toString().replace('candidate', 'stud_candidate');
        student[newName] = student[item];
        delete student[item];
      }
    });
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
};
