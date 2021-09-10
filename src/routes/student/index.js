const express = require('express');

const studentRouter = express.Router();

const StudentController = require('../../controllers/StudentController');
const StudentValidator = require('../../validators/StudentValidator');
const fileUploader = require('../../middlewares/fileUploader');

const { authenticateToken } = require('../../middlewares/authentication');

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
  '/:stud_candidate_id',
  StudentValidator.create,
  authenticateToken,
  StudentController.create
);
studentRouter.post(
  '/upload/:candidate_name/:thesis_name',
  StudentValidator.upload,
  fileUploader('file'),
  StudentController.upload
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
