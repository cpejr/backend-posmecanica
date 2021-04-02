const RelationsModel = require('../models/RelationsModel');

module.exports = {
  async connect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { pd_professor_id } = request.params;
      const pd_dis_ids = request.body;
      const field = 'pd_professor_id';
      await RelationsModel.connect(pd_dis_ids, pd_professor_id, table, field);
      return response.status(200).json('OK');
    } catch (err) {
      console.log(`Professor_Discipline creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to connect professor and discipline',
      });
    }
  },
  async disconnect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const field = 'professor_dis_id';
      const { professor_dis_id } = request.params;
      const result = await RelationsModel.disconnect(
        professor_dis_id,
        table,
        field
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Professor_Discipline delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to disconnect professor area and discipline',
      });
    }
  },
  async getAll(request, response) {
    try {
      const url = request.route.path.split('/');
      const table = url[2];
      const { times } = request.query;

      const result = await RelationsModel.getAll(table, times);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Professor_discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to GET professor and discipline',
      });
    }
  },
};
