const { v4: uuidv4 } = require('uuid');
const BankModel = require('../models/BankModel');

module.exports = {
  async create(request, response) {
    try {
      const bank = request.body;
      const bank_id = uuidv4();
      bank.bank_id = bank_id;
      await BankModel.create(bank);
      return response.status(200).json({ id: bank.bank_id });
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create a bank',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await BankModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get all bank',
      });
    }
  },

  async getById(request, response) {
    try {
      const { bank_id } = request.params;
      const result = await BankModel.getById(bank_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get a bank by id',
      });
    }
  },

  async update(request, response) {
    try {
      const { bank_id } = request.params;
      const bank = request.body;
      const result = await BankModel.updateById(bank_id, bank);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to update a bank by id',
      });
    }
  },

  async delete(request, response) {
    try {
      const { bank_id } = request.params;
      const result = await BankModel.deleteById(bank_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete a bank',
      });
    }
  },
};
