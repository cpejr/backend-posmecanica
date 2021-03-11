const { v4: uuidv4 } = require('uuid');
const connection = require('../database/connection');

module.exports = {
  async create(student) {
    const student_id = uuidv4();
    student.stud_id = student_id;
    const result = await connection('student').insert(student);
    return result;
  },

  async getAll() {
    const result = await connection('student').select('*');
    return result;
  },

  async getById(stud_id) {
    const result = await connection('student').where({ stud_id }).select('*');
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
