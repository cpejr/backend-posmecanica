const express = require('express');

const candidate_disciplineRouter = express.Router();

const Candidate_DisciplineController = require('../../controllers/Candidate_DisciplineController');
const Candidate_DisciplineValidator = require('../../validators/Candidate_DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

candidate_disciplineRouter.post(
  '/connect/candidate_dis/:cd_candidate_id',
  Candidate_DisciplineValidator.connect,
  authenticateToken,
  Candidate_DisciplineController.connect
);
candidate_disciplineRouter.delete(
  '/disconnect/candidate_dis/:candidate_dis_id',
  Candidate_DisciplineValidator.disconnect,
  authenticateToken,
  Candidate_DisciplineController.disconnect
);
candidate_disciplineRouter.get(
  '/getAll/candidate_dis',
  Candidate_DisciplineValidator.getAll,
  authenticateToken,
  Candidate_DisciplineController.getAll
);
candidate_disciplineRouter.get(
  '/getByIdDisciplineDeferment/candidate_dis',
  Candidate_DisciplineValidator.getByIdDisciplineDeferment,
  authenticateToken,
  Candidate_DisciplineController.getByIdDisciplineDeferment
);
candidate_disciplineRouter.put(
  '/update/candidate_dis/:candidate_id',
  Candidate_DisciplineValidator.update,
  authenticateToken,
  Candidate_DisciplineController.update
);
candidate_disciplineRouter.put(
  '/updateDisciplineDeferment/candidate_dis/:cd_candidate_id/:cd_dis_id',
  Candidate_DisciplineValidator.updateByIdDisciplineDeferment,
  authenticateToken,
  Candidate_DisciplineController.updateDisciplineDeferment
);

module.exports = candidate_disciplineRouter;
