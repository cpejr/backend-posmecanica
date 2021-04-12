const express = require('express');
const qualificationRouter = express.Router();

const QualificationController = require('../../controllers/QualificationController');
const QualificationValidator = require('../../validators/QualificationValidator');

const { authenticateToken } = require('../../middlewares/authentication');

qualificationRouter.get(
    '/qualifications',
    QualificationValidator.getAll,
    authenticateToken,
    QualificationController.getAll
  );
  qualificationRouter.get(
    '/qualifications/:quali_id',
    QualificationValidator.getById,
    authenticateToken,
    QualificationController.getById
  );
  qualificationRouter.post(
    '/qualifications/:quali_stud_id/:quali_bank_id/:quali_sArea_id',
    QualificationValidator.create,
    authenticateToken,
    QualificationController.create
  );
  qualificationRouter.put(
    '/qualifications/:quali_id',
    QualificationValidator.update,
    authenticateToken,
    QualificationController.update
  );
  qualificationRouter.delete(
    '/qualifications/:quali_id',
    QualificationValidator.delete,
    authenticateToken,
    QualificationController.delete
  );

  module.exports = qualificationRouter;