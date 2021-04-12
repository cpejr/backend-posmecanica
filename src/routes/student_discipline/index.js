const express = require('express');
const student_disciplineRouter = express.Router();

const Student_DisciplineController = require('../../controllers/Student_DisciplineController');
const Student_DisciplineValidator = require('../../validators/Student_DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

student_disciplineRouter.post(
  '/connect/bank_professor/:bp_bank_id',
  Student_DisciplineValidator.connect,
  authenticateToken,
  Student_DisciplineController.connect
);
student_disciplineRouter.delete(
  '/disconnect/bank_professor/:bank_professor_id',
  Student_DisciplineValidator.disconnect,
  authenticateToken,
  Student_DisciplineController.disconnect
);
student_disciplineRouter.get(
  '/getAll/bank_professor',
  authenticateToken
);

module.exports = student_disciplineRouter;
