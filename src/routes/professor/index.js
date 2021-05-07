const express = require('express');
const professorRouter = express.Router();

const ProfessorController = require('../../controllers/ProfessorController');
const ProfessorValidator = require('../../validators/ProfessorValidator');

const { authenticateToken } = require('../../middlewares/authentication');

professorRouter.get(
    '/',
    ProfessorValidator.getAll,
    authenticateToken,
    ProfessorController.getAll
  );
  professorRouter.get(
    '/:prof_id',
    ProfessorValidator.getById,
    authenticateToken,
    ProfessorController.getById
  );
  professorRouter.post(
    '/',
    ProfessorValidator.create,
    authenticateToken,
    ProfessorController.create
  );
  professorRouter.put(
    '/:prof_id',
    ProfessorValidator.update,
    authenticateToken,
    ProfessorController.update
  );
  professorRouter.delete(
    '/:prof_id',
    ProfessorValidator.delete,
    authenticateToken,
    ProfessorController.delete
  );

  module.exports = professorRouter;