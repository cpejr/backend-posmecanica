const express = require('express');
const studentRouter = express.Router();

const StudentController = require('../../controllers/StudentController');
const StudentValidator = require('../../validators/StudentValidator');

const { authenticateToken } = require('../../middlewares/authentication')

studentRouter.get(
    '/',
    StudentValidator.getAll,
    authenticateToken,
    StudentController.getAll
);
studentRouter.get(
    '/:stud_id',
    StudentValidator.getById,
    authenticateToken,
    StudentController.getById
);
studentRouter.post(
    '/:stud_process_id/:stud_candidate_id',
    StudentValidator.create,
    authenticateToken,
    StudentController.create
);
studentRouter.put(
    '/:stud_id',
    StudentValidator.update,
    authenticateToken,
    StudentController.update
);
studentRouter.delete(
    '/:stud_id',
    StudentValidator.delete,
    authenticateToken,
    StudentController.delete
);

module.exports = studentRouter;