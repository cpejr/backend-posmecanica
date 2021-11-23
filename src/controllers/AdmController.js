/* eslint-disable prettier/prettier */
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const AdmModel = require('../models/AdmModel');
const firebase = require('../utils/firebase');

const buildAdministratorObject = (administrator, defaultPassword, uid) => {
  administrator.adm_id = uuidv4();
  administrator.adm_defaultPassword = defaultPassword;
  administrator.adm_firebase = uid;
};

async function updateFirebase(administrator, adm_id) {
  const admInfos = await AdmModel.getById(adm_id);
  const firebase_id = admInfos.adm_firebase;
  const name = admInfos.adm_name;
  const oldEmail = admInfos.adm_email;
  const update = administrator.adm_defaultPassword
    ? await firebase.changeUserPassword(
      firebase_id,
      administrator.adm_defaultPassword,
      name
    )
    : await firebase.changeUserEmail(
      firebase_id,
      administrator.adm_email,
      name,
      oldEmail
    );
  const result = update.uid;
  delete administrator.adm_defaultPassword;
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
        administrator.adm_name,
        'administrator'
      );
      buildAdministratorObject(administrator, defaultPassword, uid);
      await AdmModel.create(administrator);
      return response.status(201).json({ id: administrator.adm_id });
    } catch (err) {
      console.error(`Administrator creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
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
        notification: 'Internal server error',
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
        notification: 'Internal server error',
      });
    }
  },

  async update(request, response) {
    try {
      const { adm_id } = request.params;
      const administrator = request.body;
      const isUpdatingFirebase =
        administrator.adm_defaultPassword || administrator.adm_email;
      if (isUpdatingFirebase) {
        await updateFirebase(administrator, adm_id);
      }
      const stillExistFieldsToUpdate = Object.values(administrator).length > 0;
      if (stillExistFieldsToUpdate) {
        await AdmModel.updateById(adm_id, administrator);
      }
      return response.status(200).json('OK');
    } catch (err) {
      console.error(`Administrator update failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async delete(request, response) {
    try {
      const { adm_id } = request.params;
      const admInfos = await AdmModel.getById(adm_id);
      const firebase_id = admInfos.adm_firebase;
      await firebase.deleteUser(firebase_id);
      const result = await AdmModel.deleteById(adm_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Administrator delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
