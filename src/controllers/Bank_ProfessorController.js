const RelationsModel = require('../models/RelationsModel');

module.exports = {
  async connect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { bp_bank_id } = request.params;
      const bp_professor_ids = request.body;
      const field = 'bp_bank_id';
      await RelationsModel.connect(bp_professor_ids, bp_bank_id, table, field);
      return response.status(200).json('OK');
    } catch (err) {
      console.error(`Bank_Professor creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
  async disconnect(request, response) {
    try {
      const url = request.url.split('/');
      const table = url[2];
      const { bank_professor_id } = request.params;
      const field = 'bank_professor_id';

      const result = await RelationsModel.disconnect(
        bank_professor_id,
        table,
        field
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Bank_Professor delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
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
      console.error(`Bank_Professor getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
