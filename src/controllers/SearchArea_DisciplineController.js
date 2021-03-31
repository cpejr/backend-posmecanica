const RelationsModel = require('../models/RelationsModel');

module.exports = {
  async connect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { sAd_dis_id } = request.params;
      const sAd_research_ids = request.body;
      const field = 'sAd_dis_id';
      await RelationsModel.connect(
        sAd_research_ids,
        sAd_dis_id,
        table,
        field
      );
      return response.status(200).json('OK');
    } catch (err) {
      console.log(`SearchArea_Discipline creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to connect search area and discipline',
      });
    }
  },
  async disconnect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const field = 'search_dis_id';
      const { search_dis_id } = request.params;
      const result = await RelationsModel.disconnect(
        search_dis_id,
        table,
        field
      );
      return response.status(200).json(result);
    } catch (err) {
      console.log(`SearchArea_Discipline delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to disconnect search area and discipline',
      });
    }
  },
};
