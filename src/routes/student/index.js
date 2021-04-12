const express = require('express');
const studentRouter = express.Router();

const StudentController = require('../../controllers/StudentController');
const StudentValidator = require('../../validators/StudentValidator');

const { authenticateToken } = require('../../middlewares/authentication')

studentRouter.get(
    '/students',
    StudentValidator.getAll,
    authenticateToken,
    StudentController.getAll
);
studentRouter.get(
    '/students/:stud_id',
    StudentValidator.getById,
    authenticateToken,
    StudentController.getById
);
studentRouter.post(
    '/students/:stud_process_id/:stud_candidate_id',
    StudentValidator.create,
    authenticateToken,
    StudentController.create
);
studentRouter.put(
    '/students/:stud_id',
    StudentValidator.update,
    authenticateToken,
    StudentController.update
);
studentRouter.delete(
    '/students/:stud_id',
    StudentValidator.delete,
    authenticateToken,
    StudentController.delete
);

module.exports = studentRouter;