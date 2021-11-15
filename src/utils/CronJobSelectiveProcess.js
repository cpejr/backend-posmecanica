/* eslint-disable no-restricted-syntax */
const CandidateModel = require('../models/CandidateModel');
const ProfessorModel = require('../models/ProfessorModel');
const Mail = require('../mail/mail');

module.exports = {
  async sendEmailToProfessors(request, response) {
    try {
      let disciplines = [];
      const professors = new Map();
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
        const prof = await ProfessorModel.getProfByDisciplineId(disc);
        if (!professors.has(prof.prof_id)) {
          professors.set(prof.prof_id, prof);
        }
      }

      professors?.forEach((element) => {
        const disciplinas = [];
        disciplines.forEach((e) => {
          const found = element.disciplines.find(
            (item) => item.discipline_id === e
          );
          if (found) {
            disciplinas.push(found);
          }
        });
        Mail.DemandProcess(element.prof_email, element.prof_name, disciplinas);
      });
    } catch (err) {
      console.error(err);
      return response({
        notification: 'Internal server error',
      });
    }
  },
};
