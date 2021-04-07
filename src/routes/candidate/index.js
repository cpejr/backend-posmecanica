const express = require('express');
const candidateRouter = express.Router();

const CandidateController = require('../../controllers/CandidateController');
const CandidateValidator = require('../../validators/CandidateValidator');

const { authenticateToken } = require('../../middlewares/authentication');

candidateRouter.get(
  '/candidates',
  CandidateValidator.getAll,
  authenticateToken,
  CandidateController.getAll
);
candidateRouter.get(
  '/candidates/:candidate_id',
  CandidateValidator.getById,
  authenticateToken,
  CandidateController.getById
);
candidateRouter.post(
  '/candidates/:candidate_process_id',
  CandidateValidator.create,
  CandidateController.create
);
candidateRouter.put(
  '/candidates/:candidate_id',
  CandidateValidator.update,
  CandidateController.update
);
candidateRouter.delete(
  '/candidates/:candidate_id',
  CandidateValidator.delete,
  authenticateToken,
  CandidateController.delete
);

module.exports = candidateRouter;
