const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const ProfessorModel = require('../models/ProfessorModel');
const firebase = require('../utils/firebase');

const buildProfessorObject = (professor, defaultPassword, uid) => {
  professor.prof_id = uuidv4();
  professor.prof_defaultPassword = defaultPassword;
  professor.prof_firebase = uid;
};

async function updateFirebase(professor, prof_id) {
  const profInfos = await ProfessorModel.getById(prof_id);
  const firebase_id = profInfos.prof_firebase;
  const name = profInfos.prof_name;
  const oldEmail = profInfos.prof_email;
  const update = professor.prof_defaultPassword
    ? await firebase.changeUserPassword(
        firebase_id,
        professor.prof_defaultPassword,
        name
      )
    : await firebase.changeUserEmail(
        firebase_id,
        professor.prof_email,
        name,
        oldEmail
      );
  const result = update.uid;
  delete professor.prof_defaultPassword;
  return result;
}

module.exports = {
  async create(request, response) {
    try {
      const professor = request.body;
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const uid = await firebase.createNewUser(
        professor.prof_email,
        defaultPassword,
        professor.prof_name,
        'professor'
      );
      buildProfessorObject(professor, defaultPassword, uid);
      await ProfessorModel.create(professor);
      return response.status(201).json({ id: professor.prof_id });
    } catch (err) {
      console.error(`Professor creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to create professor',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await ProfessorModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get professor',
      });
    }
  },

  async getById(request, response) {
    try {
      const { prof_id } = request.params;
      const result = await ProfessorModel.getById(prof_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get professor',
      });
    }
  },

  async update(request, response) {
    try {
      const { prof_id } = request.params;
      const professor = request.body;
      let result;
      const isUpdatingFirebase =
        professor.prof_defaultPassword || professor.prof_email;
      if (isUpdatingFirebase) {
        result = await updateFirebase(professor, prof_id);
      }
      const stillExistFieldsToUpdate = Object.values(professor).length > 0;
      if (stillExistFieldsToUpdate) {
        result = await ProfessorModel.updateById(prof_id, professor);
      }
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor update failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to update professor',
      });
    }
  },

  async delete(request, response) {
    try {
      const { prof_id } = request.params;
      const profInfos = await ProfessorModel.getById(prof_id);
      const firebase_id = profInfos.prof_firebase;
      await firebase.deleteUser(firebase_id);
      const result = await ProfessorModel.deleteById(prof_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Professor',
      });
    }
  },

  async getProfByDisciplineId(request, response) {
    try {
      const { discipline_id } = request.params;
      const result = await ProfessorModel.getProfByDisciplineId(discipline_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
