const RelationsModel = require('../models/RelationsModel');

module.exports = {
  async connect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { sd_student_id } = request.params;
      const sd_dis_ids = request.body;
      const field = 'sd_student_id';
      await RelationsModel.connect(sd_dis_ids, sd_student_id, table, field);
      return response.status(200).json('OK');
    } catch (err) {
      console.error(`Student_Discipline creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to connect student and discipline',
      });
    }
  },
  async disconnect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { student_dis_id } = request.params;
      const field = 'student_dis_id';

      const result = await RelationsModel.disconnect(
        student_dis_id,
        table,
        field
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Student_Discipline delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to disconnect student and discipline',
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
      console.error(`Student_Discipline getAll failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to GET student and discipline',
      });
    }
  },
};
