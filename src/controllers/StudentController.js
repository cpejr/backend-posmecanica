const StudentModel = require('../models/StudentModel');
const firebase = require("../utils/firebase")
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(request, response) {
    try {
      const student = request.body;
      const student_id = uuidv4();
      student.stud_id = student_id;
      const { stud_process_id } = request.params;
      student.stud_process_id = stud_process_id;
      const uid = await firebase.createNewUser(student.stud_email, student.stud_password)
      // delete student.stud_password
      //Lembrar depois de apagar a senha do banco de dados
      student.firebase.student_firebase = uid
      const result = await StudentModel.create(student);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Student creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Student',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await StudentModel.getAll();

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Student getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Student',
      });
    }
  },

  async getById(request, response) {
    try {
      const { stud_id } = request.params;
      const result = await StudentModel.getById(stud_id);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Student getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Student',
      });
    }
  },

  async update(request, response) {
    try {
      const { stud_id } = request.params;
      const student = request.body;
      const result = await StudentModel.updateById(stud_id, student);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Student update failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Student',
      });
    }
  },

  async delete(request, response) {
    try {
      const { stud_id } = request.params;

      const result = await StudentModel.deleteById(stud_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Student delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Student',
      });
    }
  },
};
