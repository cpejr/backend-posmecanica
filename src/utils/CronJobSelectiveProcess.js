const CandidateModel = require('../models/CandidateModel');

module.exports = {
  async sendEmailToProfessors(request, response) {
    try {
      const candidates = await CandidateModel.getBySelectiveProcessId(request);
      console.log(
        '🚀 ~ file: CronJobSelectiveProcess.js ~ line 9 ~ sendEmailToProfessors ~ candidates',
        candidates
      );
      return response.status(200).json('OK');
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
