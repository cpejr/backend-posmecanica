const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const StudentModel = require('../models/StudentModel');
const CandidateModel = require('../models/CandidateModel');
const firebase = require('../utils/firebase');

const buildStudentObject = (
  student,
  stud_process_id,
  stud_candidate_id,
  defaultPassword,
  uid
) => {
  student.stud_id = uuidv4();
  student.stud_process_id = stud_process_id;
  student.stud_candidate_id = stud_candidate_id;
  student.stud_firebase = uid;
  student.stud_defaultPassword = defaultPassword;
  delete student.stud_password;
};

async function updatePassword(student, stud_id) {
  const studInfos = await StudentModel.getById(stud_id);
  const firebase_id = studInfos.stud_firebase;
  let result;
  try {
    const update = await firebase.changeUserPassword(
      firebase_id,
      student.stud_defaultPassword
    );
    result = update.uid;
    delete student.stud_defaultPassword;
  } catch (err) {
    console.error(`Student password update failed: ${err}`);
    return 'ERROR';
  }
  return result;
}

module.exports = {
  async create(request, response) {
    try {
      const student = request.body;
      const { stud_process_id, stud_candidate_id } = request.params;
      const infos = await CandidateModel.getById(stud_candidate_id);
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const uid = await firebase.createNewUser(
        infos.candidate_email,
        defaultPassword
      );
      buildStudentObject(
        student,
        stud_process_id,
        stud_candidate_id,
        defaultPassword,
        uid
      );
      await StudentModel.create(student);
      return response.status(200).json({ id: student.stud_id });
    } catch (err) {
      console.error(`Student creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Student',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await StudentModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Student getAll failed: ${err}`);
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
      console.error(`Student getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Student',
      });
    }
  },

  async update(request, response) {
    try {
      const { stud_id } = request.params;
      const student = request.body;
      let result;
      if (student.stud_defaultPassword) {
        result = await updatePassword(student, stud_id);
        if (result === 'ERROR') {
          throw new Error(
            'Internal server error while trying to update password'
          );
        }
      }
      const stillExistFieldsToUpdate = student.length > 0;
      if (stillExistFieldsToUpdate) {
        result = await StudentModel.updateById(stud_id, student);
      }
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Student update failed: ${err}`);
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
      console.error(`Student delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Student',
      });
    }
  },
};
