const { v4: uuidv4 } = require('uuid');
const CandidateModel = require('../models/CandidateModel');

module.exports = {
  async create(request, response) {
    try {
      const candidate = request.body;
      const candidate_id = uuidv4();
      const { candidate_process_id } = request.params;
      const protocol = parseInt(Math.random() * 1000000000, 10);
      candidate.candidate_id = candidate_id;
      candidate.candidate_protocol = protocol;
      candidate.candidate_process_id = candidate_process_id;
      await CandidateModel.create(candidate);
      return response.status(200).json({ id: candidate.candidate_id });
    } catch (err) {
      console.log(`Candidate creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Candidate',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await CandidateModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Candidate getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Candidate',
      });
    }
  },

  async getById(request, response) {
    try {
      const { candidate_id } = request.params;
      const result = await CandidateModel.getById(candidate_id);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Candidate getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Candidate',
      });
    }
  },

  async update(request, response) {
    try {
      const { candidate_id } = request.params;
      const candidate = request.body;
      const result = await CandidateModel.updateById(candidate_id, candidate);

      return response.status(200).json(result);
    } catch (err) {
      console.log(`Candidate update failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Candidate',
      });
    }
  },

  async delete(request, response) {
    try {
      const { candidate_id } = request.params;

      const result = await CandidateModel.deleteById(candidate_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log(`Candidate delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Candidate',
      });
    }
  },
};
