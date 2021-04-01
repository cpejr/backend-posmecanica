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
        notification:
          'Internal server error while trying to create a search area',
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
        notification:
          'Internal server error while trying to get all search area',
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
        notification:
          'Internal server error while trying to get a search area by id',
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
        notification:
          'Internal server error while trying to update a search area by id',
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
        notification:
          'Internal server error while trying to delete a search area',
      });
    }
  },
};
