const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');
const SelectiveProcessModel = require('../models/SelectiveProcessModel');
const sendEmail = require('../utils/CronJobSelectiveProcess');

module.exports = {
  async create(request, response) {
    try {
      const selective_process = request.body;
      const process_id = uuidv4();
      selective_process.process_id = process_id;
      await SelectiveProcessModel.create(selective_process);
      let currentDate;

      const data = new Date(selective_process.process_date_end);
      const day = data.getDate().toString();
      const month = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
      const year = data.getFullYear();

      cron.schedule(`59 23 ${day} ${month} *`, () => {
        currentDate = new Date().getFullYear();
        if (
          selective_process.process_type === 'ISOLADA' &&
          currentDate === year
        ) {
          sendEmail.sendEmailToProfessors(selective_process.process_id);
        }
      });

      return response.status(200).json({ id: selective_process.process_id });
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await SelectiveProcessModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get all selective process',
      });
    }
  },

  async getById(request, response) {
    try {
      const { process_id } = request.params;
      const result = await SelectiveProcessModel.getById(process_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get a selective process by id',
      });
    }
  },

  async update(request, response) {
    try {
      const { process_id } = request.params;
      const selective_process = request.body;
      const result = await SelectiveProcessModel.updateById(
        process_id,
        selective_process
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to update a selective process by id',
      });
    }
  },

  async delete(request, response) {
    try {
      const { process_id } = request.params;
      const result = await SelectiveProcessModel.deleteById(process_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to delete a selective process',
      });
    }
  },
};
