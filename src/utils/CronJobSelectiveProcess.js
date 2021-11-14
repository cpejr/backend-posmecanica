/* eslint-disable no-restricted-syntax */
const CandidateModel = require('../models/CandidateModel');
const ProfessorModel = require('../models/ProfessorModel');

module.exports = {
  async sendEmailToProfessors(request, response) {
    try {
      let disciplines = [];
      const professors = [];
      console.log(
        '🚀 ~ file: CronJobSelectiveProcess.js ~ line 5 ~ sendEmailToProfessors ~ request',
        request
      ); // para ESLint não reclamar que não usou request (TEMPORÁRIO)
      const candidates = await CandidateModel.getBySelectiveProcessId(
        'c5aef8b6-a9e5-4009-93fa-18a715e7f65e' // estático para teste
      );
      candidates?.forEach((element) => {
        element.candidate_disciplines?.forEach((item) => {
          disciplines.push(item.cd_dis_id);
        });
      });

      disciplines = [...new Set(disciplines)];

      for (const disc of disciplines) {
        // eslint-disable-next-line no-await-in-loop
        const prof = await ProfessorModel.getByDisciplineId(disc);
        professors.push(prof);
      }
      console.log(
        '🚀 ~ file: CronJobSelectiveProcess.js ~ line 29 ~ sendEmailToProfessors ~ professors',
        professors
      ); // enquanto não utiliza a função do email

      return response.status(200).json('OK');
    } catch (err) {
      console.error(err);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
