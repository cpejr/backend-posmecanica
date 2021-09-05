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

module.exports = candidate_disciplineRouter;
