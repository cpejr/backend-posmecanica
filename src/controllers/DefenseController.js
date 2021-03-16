const DefenseModel = require('../models/DefenseModel');

module.exports = {
  async create(request, response) {
    try {
      const defense = request.body;
      await DefenseModel.create(defense);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to create a defense',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await DefenseModel.getAll();
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get all defense',
      });
    }
  },

  async getById(request, response) {
    try {
      const { defense_id } = request.params;
      const result = await DefenseModel.getById(defense_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to get a defense by id',
      });
    }
  },

  async update(request, response) {
    try {
      const { defense_id } = request.params;
      const defense = request.body;
      const result = await DefenseModel.updateById(
        defense_id,
        defense
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to update a defense by id',
      });
    }
  },

  async delete(request, response) {
    try {
      const { defense_id } = request.params;
      const result = await DefenseModel.deleteById(defense_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification:
          'Internal server error while trying to delete a defense',
      });
    }
  },
};
