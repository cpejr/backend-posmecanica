const express = require('express');
const professorRouter = express.Router();

const ProfessorController = require('../../controllers/ProfessorController');
const ProfessorValidator = require('../../validators/ProfessorValidator');

const { authenticateToken } = require('../../middlewares/authentication');

professorRouter.get(
    '/professors',
    ProfessorValidator.getAll,
    authenticateToken,
    ProfessorController.getAll
  );
  professorRouter.get(
    '/professors/:prof_id',
    ProfessorValidator.getById,
    authenticateToken,
    ProfessorController.getById
  );
  professorRouter.post(
    '/professors',
    ProfessorValidator.create,
    authenticateToken,
    ProfessorController.create
  );
  professorRouter.put(
    '/professors/:prof_id',
    ProfessorValidator.update,
    authenticateToken,
    ProfessorController.update
  );
  professorRouter.delete(
    '/professors/:prof_id',
    ProfessorValidator.delete,
    authenticateToken,
    ProfessorController.delete
  );

  module.exports = professorRouter;