const express = require('express');

const studentRouter = express.Router();

const StudentController = require('../../controllers/StudentController');
const StudentValidator = require('../../validators/StudentValidator');
const thesisUploader = require('../../middlewares/thesisUploader');

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
  '/upload/:candidate_id/:thesis_name',
  StudentValidator.upload,
  thesisUploader('file'),
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

studentRouter.get(
  '/thesis/:candidate_id/:thesis_name?',
  StudentValidator.getThesis,
  authenticateToken,
  StudentController.getThesis
);

module.exports = studentRouter;
