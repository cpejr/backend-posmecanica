const express = require('express');

const student_disciplineRouter = express.Router();

const Student_DisciplineController = require('../../controllers/Student_DisciplineController');
const Student_DisciplineValidator = require('../../validators/Student_DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

student_disciplineRouter.post(
  '/connect/student_dis/:sd_student_id',
  Student_DisciplineValidator.connect,
  authenticateToken,
  Student_DisciplineController.connect
);
student_disciplineRouter.delete(
  '/disconnect/student_dis/:student_dis_id',
  Student_DisciplineValidator.disconnect,
  authenticateToken,
  Student_DisciplineController.disconnect
);
student_disciplineRouter.get('/getAll/student_dis', authenticateToken);

module.exports = student_disciplineRouter;
