const SearchAreaModel = require('../models/SearchAreaModel');

module.exports = {
  async create(request, response) {
    try {
      const searchArea = request.body;
      await SearchAreaModel.create(searchArea);
      return response.status(200).json({ id: searchArea.search_area_id });
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await SearchAreaModel.getAll(
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
      const { search_area_id } = request.params;
      const result = await SearchAreaModel.getById(search_area_id);
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
      const { search_area_id } = request.params;
      const searchArea = request.body;
      const result = await SearchAreaModel.updateById(
        search_area_id,
        searchArea
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
      const { search_area_id } = request.params;
      const result = await SearchAreaModel.deleteById(search_area_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
