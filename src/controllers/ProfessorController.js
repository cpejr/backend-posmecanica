const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const ProfessorModel = require('../models/ProfessorModel');
const firebase = require('../utils/firebase');

module.exports = {
  async create(request, response) {
    try {
      const professor = request.body;
      const professor_id = uuidv4();
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const uid = await firebase.createNewUser(
        professor.prof_email,
        defaultPassword
      );
      professor.prof_id = professor_id;
      professor.prof_defaultPassword = defaultPassword;
      professor.prof_firebase = uid;
      await ProfessorModel.create(professor);
      return response.status(200).json({ id: professor.prof_id });
    } catch (err) {
      console.log(`Professor creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to create professor',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await ProfessorModel.getAll(request.query.times);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Professor getAll failed: ${err}`);
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
      console.log(`Professor getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get professor',
      });
    }
  },

  async update(request, response) {
    try {
      const { prof_id } = request.params;
      const professor = request.body;
      if (professor.prof_defaultPassword) {
        const profInfos = await ProfessorModel.getById(prof_id);
        const firebase_id = profInfos.prof_firebase;
        try {
          await firebase.changeUserPassword(
            firebase_id,
            professor.prof_defaultPassword
          );
          //delete professor.prof_defaultPassword;
        } catch (err) {
          console.log(`Professor password update failed: ${err}`);
          return response.status(500).json({
            notification:
              'Internal server error while trying to update password',
          });
        }
      }
      const result = await ProfessorModel.updateById(prof_id, professor);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Professor update failed: ${err}`);
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
      console.log(`Professor delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Professor',
      });
    }
  },
};
