const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const AdmModel = require('../models/AdmModel');
const firebase = require('../utils/firebase');

module.exports = {
  async create(request, response) {
    try {
      const administrator = request.body;
      const administrator_id = uuidv4();
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const uid = await firebase.createNewUser(
        administrator.adm_email,
        defaultPassword
      );
      administrator.adm_id = administrator_id;
      administrator.adm_defaultPassword = defaultPassword;
      administrator.adm_firebase = uid;
      const result = await AdmModel.create(administrator);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Administrator creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to create administrator',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await AdmModel.getAll();

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Administrator getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get administrator',
      });
    }
  },

  async getById(request, response) {
    try {
      const { adm_id } = request.params;
      const result = await AdmModel.getById(adm_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Administrator getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get administrator',
      });
    }
  },

  async update(request, response) {
    try {
      const { adm_id } = request.params;
      const administrator = request.body;
      const result = await AdmModel.updateById(adm_id, administrator);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Administrator update failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to update administrator',
      });
    }
  },

  async delete(request, response) {
    try {
      const { adm_id } = request.params;

      const result = await AdmModel.deleteById(adm_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Administrator delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to delete Administrator',
      });
    }
  },
};
