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
      console.error(`Professor_Discipline creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
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
      console.error(`Professor_Discipline delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
  async getAll(request, response) {
    try {
      const url = request.route.path.split('/');
      const table = url[2];
      const result = await RelationsModel.getAll(
        table,
        request.query.times,
        request.query.field,
        request.query.filter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Professor_discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error ',
      });
    }
  },
  async update(request, response) {
    try {
      const { pd_dis_id } = request.params;
      const data = request.body;
      const result = await RelationsModel.updateByIdDisciplineProfessor(
        pd_dis_id,
        data
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
