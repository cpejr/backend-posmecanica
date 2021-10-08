const { v4: uuidv4 } = require('uuid');
const DefenseModel = require('../models/DefenseModel');

const buildDefenseObject = (
  defense,
  defense_stud_id,
) => {
  defense.defense_id = uuidv4();
  defense.defense_stud_id = defense_stud_id;
};

module.exports = {
  async create(request, response) {
    try {
      const defense = request.body;
      const {
        defense_stud_id,
      } = request.params;
      buildDefenseObject(
        defense,
        defense_stud_id,
      );
      await DefenseModel.create(defense);
      return response.status(200).json({ id: defense.defense_id });
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create a defense',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await DefenseModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get all defense',
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
      const result = await DefenseModel.updateById(defense_id, defense);
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
        notification: 'Internal server error while trying to delete a defense',
      });
    }
  },
};
