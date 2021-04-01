const { v4: uuidv4 } = require('uuid');
const DisciplineModel = require('../models/DisciplineModel');

module.exports = {
  async create(request, response) {
    try {
      const discipline = request.body;
      const discipline_id = uuidv4();
      discipline.discipline_id = discipline_id;
      await DisciplineModel.create(discipline);
      return response.status(200).json({ id: discipline_id });
    } catch (err) {
      console.log(`Discipline creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to create discipline',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await DisciplineModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get discipline',
      });
    }
  },

  async getById(request, response) {
    try {
      const { discipline_id } = request.params;
      const result = await DisciplineModel.getById(discipline_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Discipline getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get discipline',
      });
    }
  },

  async update(request, response) {
    try {
      const { discipline_id } = request.params;
      const discipline = request.body;
      const result = await DisciplineModel.updateById(
        discipline_id,
        discipline
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Discipline update failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to update discipline',
      });
    }
  },

  async delete(request, response) {
    try {
      const { discipline_id } = request.params;

      const result = await DisciplineModel.deleteById(discipline_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Discipline delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Discipline',
      });
    }
  },
};
