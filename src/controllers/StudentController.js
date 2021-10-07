const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const StudentModel = require('../models/StudentModel');
const CandidateModel = require('../models/CandidateModel');
const firebase = require('../utils/firebase');
const { uploadThesis } = require('../utils/FirebaseStore');

const buildStudentObject = (
  student,
  stud_candidate_id,
  defaultPassword,
  uid,
  studentType
) => {
  student.stud_id = uuidv4();
  student.stud_candidate_id = stud_candidate_id;
  student.stud_firebase = uid;
  student.stud_defaultPassword = defaultPassword;
  student.stud_type = studentType;
  delete student.stud_password;
};

async function updatePassword(student, stud_id) {
  const studInfos = await StudentModel.getById(stud_id);
  const firebase_id = studInfos.stud_firebase;
  const name = studInfos.stud_candidate_name;
  const update = await firebase.changeUserPassword(
    firebase_id,
    student.stud_defaultPassword,
    name
  );
  const result = update.uid;
  delete student.stud_defaultPassword;
  return result;
}

module.exports = {
  async create(request, response) {
    try {
      const student = request.body;
      const { stud_candidate_id } = request.params;
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const studentType = 'ATIVO';
      buildStudentObject(
        student,
        stud_candidate_id,
        defaultPassword,
        studentType
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
      }
      const stillExistFieldsToUpdate = Object.values(student).length > 0;
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
      const studInfos = await StudentModel.getById(stud_id);
      const firebase_id = studInfos.stud_firebase;
      await firebase.deleteUser(firebase_id);
      const result = await CandidateModel.deleteById(
        studInfos.stud_candidate_id
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Student delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Student',
      });
    }
  },

  async upload(request, response) {
    try {
      const { candidate_name, thesis_name } = request.params;
      const fileId = await uploadThesis(
        request.file,
        `Thesis/${candidate_name}/`,
        thesis_name
      );
      return response.status(200).json(fileId);
    } catch (err) {
      console.error(`Upload file failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to upload file',
      });
    }
  },
};
