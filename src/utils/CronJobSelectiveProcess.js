/* eslint-disable no-restricted-syntax */
const CandidateModel = require('../models/CandidateModel');
const ProfessorModel = require('../models/ProfessorModel');
const Mail = require('../mail/mail');

module.exports = {
  async sendEmailToProfessors(request, response) {
    try {
      let disciplines = [];
      const professors = new Map();

      const candidates = await CandidateModel.getBySelectiveProcessId(request);
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
      return 'OK';
    } catch (err) {
      console.error(err);
      return response({
        notification: 'Internal server error',
      });
    }
  },
};
