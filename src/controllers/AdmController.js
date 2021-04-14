const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const AdmModel = require('../models/AdmModel');
const firebase = require('../utils/firebase');

const buildAdministratorObject = (administrator, defaultPassword, uid) => {
  administrator.adm_id = uuidv4();
  administrator.adm_defaultPassword = defaultPassword;
  administrator.adm_firebase = uid;
};

async function updatePassword(administrator, adm_id) {
  const admInfos = await AdmModel.getById(adm_id);
  const firebase_id = admInfos.adm_firebase;
  const name = admInfos.adm_name;
  let result;
  try {
    const update = await firebase.changeUserPassword(
      firebase_id,
      administrator.adm_defaultPassword,
      name
    );
    result = update.uid;
    delete administrator.adm_defaultPassword;
  } catch (err) {
    console.error(`Administrator password update failed: ${err}`);
    return 'ERROR';
  }
  return result;
}

module.exports = {
  async create(request, response) {
    try {
      const administrator = request.body;
      const defaultPassword = crypto.randomBytes(8).toString('Hex');
      const uid = await firebase.createNewUser(
        administrator.adm_email,
        defaultPassword,
        administrator.adm_name
      );
      buildAdministratorObject(administrator, defaultPassword, uid);
      await AdmModel.create(administrator);
      return response.status(200).json({ id: administrator.adm_id });
    } catch (err) {
      console.error(`Administrator creation failed: ${err}`);
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
      console.error(`Administrator getAll failed: ${err}`);
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
      console.error(`Administrator getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get administrator',
      });
    }
  },

  async update(request, response) {
    try {
      let result;
      const { adm_id } = request.params;
      const administrator = request.body;
      if (administrator.adm_defaultPassword) {
        result = await updatePassword(administrator, adm_id);
        if (result === 'ERROR') {
          throw new Error(
            'Internal server error while trying to update password'
          );
        }
      }
      const stillExistFieldsToUpdate = administrator.length > 0;
      if (stillExistFieldsToUpdate) {
        result = await AdmModel.updateById(adm_id, administrator);
      }
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Administrator update failed: ${err}`);
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
      console.error(`Administrator delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to delete Administrator',
      });
    }
  },
};
