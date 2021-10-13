const express = require('express');
const qualificationRouter = express.Router();

const QualificationController = require('../../controllers/QualificationController');
const QualificationValidator = require('../../validators/QualificationValidator');

const { authenticateToken } = require('../../middlewares/authentication');

qualificationRouter.get(
    '/',
    QualificationValidator.getAll,
    authenticateToken,
    QualificationController.getAll
  );
  qualificationRouter.get(
    '/:quali_id',
    QualificationValidator.getById,
    authenticateToken,
    QualificationController.getById
  );
  qualificationRouter.get(
    '/students/:quali_stud_id',
    QualificationValidator.getByStudent,
    authenticateToken,
    QualificationController.getByStudent
  );
  qualificationRouter.post(
    '/:quali_stud_id',
    QualificationValidator.create,
    authenticateToken,
    QualificationController.create
  );
  qualificationRouter.put(
    '/:quali_id',
    QualificationValidator.update,
    authenticateToken,
    QualificationController.update
  );
  qualificationRouter.delete(
    '/:quali_id',
    QualificationValidator.delete,
    authenticateToken,
    QualificationController.delete
  );

  module.exports = qualificationRouter;