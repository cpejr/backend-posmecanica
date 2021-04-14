const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const ProfessorModel = require('../models/ProfessorModel');
const firebase = require('../utils/firebase');

const buildProfessorObject = (professor, defaultPassword, uid) => {
  professor.prof_id = uuidv4();
  professor.prof_defaultPassword = defaultPassword;
  professor.prof_firebase = uid;
};

async function updatePassword(professor, prof_id) {
  const profInfos = await ProfessorModel.getById(prof_id);
  const firebase_id = profInfos.prof_firebase;
  let result;
  try {
    const update = await firebase.changeUserPassword(
      firebase_id,
      professor.prof_defaultPassword
    );
    result = update.uid;
    delete professor.prof_defaultPassword;
  } catch (err) {
    console.error(`Professor password update failed: ${err}`);
    return 'ERROR';
  }
  return result;
}

module.exports = {
  async create(request, response) {
    try {
      const professor = request.body;
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const uid = await firebase.createNewUser(
        professor.prof_email,
        defaultPassword
      );
      buildProfessorObject(professor, defaultPassword, uid);
      await ProfessorModel.create(professor);
      return response.status(200).json({ id: professor.prof_id });
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
      if (professor.prof_defaultPassword) {
        result = await updatePassword(professor, prof_id);
        if (result === 'ERROR') {
          throw new Error(
            'Internal server error while trying to update password'
          );
        }
      }
      const stillExistFieldsToUpdate = professor.length > 0;
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
      const result = await ProfessorModel.deleteById(prof_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Professor',
      });
    }
  },
};
