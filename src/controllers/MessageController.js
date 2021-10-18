const { v4: uuidv4 } = require('uuid');
const MessageModel = require('../models/MessageModel');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    try {
      const message = request.body;
      const message_id = uuidv4();
      message.message_id = message_id;

      if (message.message_receiver_type === 'administrator') {
        const adm = await connection('administrator').select('*').first();
        message.message_receiver_id = adm.adm_id;
      }

      const res = await MessageModel.create(message);
      return response.status(200).json(res);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create a message',
      });
    }
  },

  async delete(request, response) {
    try {
      const { message_id } = request.params;
      const result = await MessageModel.deleteById(message_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete a message',
      });
    }
  },

  async getById(request, response) {
    try {
      const { id } = request.params;
      const result = await MessageModel.getById(id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get a message by id',
      });
    }
  },

  async getByStudentId(request, response) {
    try {
      const { student_id } = request.params;
      const result = await MessageModel.getByUserId(student_id, 'aluno');
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get a message by student_id',
      });
    }
  },

  async getNotificationByStudentId(request, response) {
    try {
      const { student_id } = request.params;
      const result = await MessageModel.getNotification(student_id, 'aluno');
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get a notification by student_id',
      });
    }
  },

  async getByAdmId(request, response) {
    try {
      const { adm_id } = request.params;
      const result = await MessageModel.getByUserId(adm_id, 'administrator');
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get a message by adm_id',
      });
    }
  },

  async update(request, response) {
    try {
      const { id: message_id } = request.params;
      const message = request.body;
      const result = await MessageModel.updateById(message_id, message);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to update a message by id',
      });
    }
  },
};
