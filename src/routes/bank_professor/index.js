const express = require('express');
const bank_professorRouter = express.Router();

const Bank_ProfessorController = require('../../controllers/Bank_ProfessorController');
const Bank_ProfessorValidator = require('../../validators/Bank_ProfessorValidator');

const { authenticateToken } = require('../../middlewares/authentication');

bank_professorRouter.post(
  '/connect/bank_professor/:bp_bank_id',
  Bank_ProfessorValidator.connect,
  authenticateToken,
  Bank_ProfessorController.connect
);
bank_professorRouter.delete(
  '/disconnect/bank_professor/:bank_professor_id',
  Bank_ProfessorValidator.disconnect,
  authenticateToken,
  Bank_ProfessorController.disconnect
);
bank_professorRouter.get(
  '/getAll/bank_professor',
  Bank_ProfessorValidator.getAll,
  authenticateToken,
  Bank_ProfessorController.getAll
);

module.exports = bank_professorRouter;
