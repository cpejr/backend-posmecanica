const RelationsModel = require('../models/RelationsModel');

module.exports = {
  async connect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { sp_professor_id } = request.params;
      const searchArea_ids = request.body;
      const field = 'sp_professor_id';
      await RelationsModel.connect(
        searchArea_ids,
        sp_professor_id,
        table,
        field
      );
      return response.status(200).json('OK');
    } catch (err) {
      console.log(`SearchArea_Professor creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to connect search area and professor',
      });
    }
  },
  async disconnect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const field = 'searchArea_professor_id';
      const { searchArea_professor_id } = request.params;
      const result = await RelationsModel.disconnect(
        searchArea_professor_id,
        table,
        field
      );
      return response.status(200).json(result);
    } catch (err) {
      console.log(`SearchArea_Professor delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to disconnect search area and professor',
      });
    }
  },
};
