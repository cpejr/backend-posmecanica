const express = require('express');
const candidateRouter = express.Router();
const fileUploader = require('../../middlewares/fileUploader');

const CandidateController = require('../../controllers/CandidateController');
const CandidateValidator = require('../../validators/CandidateValidator');

const { authenticateToken } = require('../../middlewares/authentication');

candidateRouter.get(
  '/',
  CandidateValidator.getAll,
  authenticateToken,
  CandidateController.getAll
);
candidateRouter.post(
  '/upload',
  fileUploader('file'),
  CandidateValidator.upload,
  authenticateToken,
  CandidateController.upload
);

candidateRouter.get(
  '/:candidate_id',
  CandidateValidator.getById,
  authenticateToken,
  CandidateController.getById
);
candidateRouter.post(
  '/:candidate_process_id',
  CandidateValidator.create,
  CandidateController.create
);
candidateRouter.put(
  '/:candidate_id',
  CandidateValidator.update,
  CandidateController.update
);
candidateRouter.delete(
  '/:candidate_id',
  CandidateValidator.delete,
  authenticateToken,
  CandidateController.delete
);

module.exports = candidateRouter;
