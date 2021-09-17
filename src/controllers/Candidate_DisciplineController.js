const RelationsModel = require('../models/RelationsModel');

module.exports = {
  async connect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { cd_candidate_id } = request.params;
      const cd_dis_ids = request.body;
      const field = 'cd_candidate_id';
      await RelationsModel.connect(cd_dis_ids, cd_candidate_id, table, field);
      return response.status(200).json('OK');
    } catch (err) {
      console.error(`Candidate_Discipline creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to connect candidate and discipline',
      });
    }
  },
  async disconnect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { candidate_dis_id } = request.params;
      const field = 'candidate_dis_id';

      const result = await RelationsModel.disconnect(
        candidate_dis_id,
        table,
        field
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate_Discipline delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to disconnect candidate and discipline',
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
      console.error(`Candidate_Discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to GET candidate and discipline',
      });
    }
  },
  async getByIdDisciplineDeferment(request, response) {
    try {
      const url = request.route.path.split('/');
      const table = url[2];
      const result = await RelationsModel.getByIdDisciplineDeferment(
        table,
        request.query.firstFilter,
        request.query.secondFilter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate_Discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
  async update(request, response) {
    try {
      const url = request.route.path.split('/');
      const table = url[2];
      const { candidate_dis_id } = request.params;
      const data = request.body;
      const result = await RelationsModel.updateById(
        table,
        candidate_dis_id,
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
  async updateByIdDisciplineDeferment(request, response) {
    try {
      const url = request.route.path.split('/');
      const table = url[2];
      const data = request.body;
      const result = await RelationsModel.updateByIdDisciplineDeferment(
        table,
        request.params.cd_candidate_id,
        request.params.cd_dis_id,
        data
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate_Discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
