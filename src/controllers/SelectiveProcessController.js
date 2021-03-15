const SelectiveProcessModel = require('../models/SelectiveProcessModel');

module.exports = {
  async create(request, response) {
    try {
      const process = request.body;
      await SelectiveProcessModel.create(process);
      return response.status(200).json({ id: process.process_id });
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to create a selective process',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await SelectiveProcessModel.getAll();
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
      const process = request.body;
      const result = await SelectiveProcessModel.updateById(
        process_id,
        process
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
