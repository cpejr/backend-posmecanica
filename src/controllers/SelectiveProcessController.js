const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');
const moment = require('moment');
const SelectiveProcessModel = require('../models/SelectiveProcessModel');
const sendEmail = require('../utils/CronJobSelectiveProcess');

module.exports = {
  async create(request, response) {
    try {
      const selective_process = request.body;
      const process_id = uuidv4();
      const endDate = moment(selective_process.process_date_end);
      endDate.set({ hour: 23, minute: 59, second: 59, millisecond: 59 });
      selective_process.process_date_end = endDate;
      selective_process.process_id = process_id;
      await SelectiveProcessModel.create(selective_process);
      let currentDate;

      let data = moment(response.process_date_end).add(1, 'days');
      data = new Date(data);
      const day = data.getDate().toString();
      const month = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
      const year = data.getFullYear();

      cron.schedule(`0 0 ${day} ${month} *`, () => {
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
        notification: 'Internal server error',
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
        notification: 'Internal server error',
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
        notification: 'Internal server error',
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
        notification: 'Internal server error',
      });
    }
  },
};
