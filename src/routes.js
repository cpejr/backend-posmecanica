const express = require('express');

const routes = express.Router();

// const auth = require('./middlewares/authentication')

const CandidateController = require('./controllers/CandidateController');
const CandidateValidator = require('./validators/CandidateValidator');

const AdmController = require('./controllers/AdmController');
const AdmValidator = require('./validators/AdmValidator');

const StudentController = require('./controllers/StudentController');
const StudentValidator = require('./validators/StudentValidator');

// Candidate
routes.get('/candidates', CandidateController.getAll);
routes.get(
  '/candidates/:candidate_id',
  CandidateValidator.getById,
  CandidateController.getById
);
routes.post(
  '/candidates',
  CandidateValidator.create,
  CandidateController.create
);
routes.put(
  '/candidates/:candidate_id',
  CandidateValidator.update,
  CandidateController.update
);
routes.delete(
  '/candidates/:candidate_id',
  CandidateValidator.delete,
  CandidateController.delete
);

// Administrador
routes.get('/adms', AdmController.getAll);
routes.get('/adms/:adm_id', AdmValidator.getById, AdmController.getById);
routes.post('/adms', AdmValidator.create, AdmController.create);
routes.put('/adms/:adm_id', AdmValidator.update, AdmController.update);
routes.delete('/adms/:adm_id', AdmValidator.delete, AdmController.delete);

// Student
routes.get('/students', StudentController.getAll);
routes.get(
  '/students/:stud_id',
  StudentValidator.getById,
  StudentController.getById
);
routes.post(
  '/students/:stud_process_id',
  StudentValidator.create,
  StudentController.create
);
routes.put(
  '/students/:stud_id',
  StudentValidator.update,
  StudentController.update
);
routes.delete(
  '/students/:stud_id',
  StudentValidator.delete,
  StudentController.delete
);

module.exports = routes;
