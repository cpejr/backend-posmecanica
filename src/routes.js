const express = require('express');

const routes = express.Router();

const CandidateController = require('./controllers/CandidateController');
const CandidateValidator = require('./validators/CandidateValidator');

const AdmController = require('./controllers/AdmController');
const AdmValidator = require('./validators/AdmValidator');

const StudentController = require('./controllers/StudentController');
const StudentValidator = require('./validators/StudentValidator');

const SelectiveProcessController = require('./controllers/SelectiveProcessController');
const SelectiveProcessValidator = require('./validators/SelectiveProcessValidator');

const SearchAreaController = require('./controllers/SearchAreaController');
const SearchAreaValidator = require('./validators/SearchAreaValidator');

const BankController = require('./controllers/BankController');
const BankValidator = require('./validators/BankValidator');

const DefenseController = require('./controllers/DefenseController');
const DefenseValidator = require('./validators/DefenseValidator');

const ProfessorController = require('./controllers/ProfessorController');
const ProfessorValidator = require('./validators/ProfessorValidator');

const QualificationController = require('./controllers/QualificationController');
const QualificationValidator = require('./validators/QualificationValidator');

const SessionController = require('./controllers/SessionController');
const SessionValidator = require('./validators/SessionValidator');

const Authorization = require('./middlewares/authentication');

// Administrador
routes.get('/adms', Authorization.authenticateToken, AdmController.getAll);
routes.get(
  '/adms/:adm_id',
  AdmValidator.getById,
  Authorization.authenticateToken,
  AdmController.getById
);
routes.post(
  '/adms',
  AdmValidator.create,
  Authorization.authenticateToken,
  AdmController.create
);
routes.put(
  '/adms/:adm_id',
  AdmValidator.update,
  Authorization.authenticateToken,
  AdmController.update
);
routes.delete(
  '/adms/:adm_id',
  AdmValidator.delete,
  Authorization.authenticateToken,
  AdmController.delete
);

// Banks
routes.get(
  '/banks',
  BankValidator.getAll,
  Authorization.authenticateToken,
  BankController.getAll
);
routes.get(
  '/banks/:bank_id',
  BankValidator.getById,
  Authorization.authenticateToken,
  BankController.getById
);
routes.post(
  '/banks',
  BankValidator.create,
  Authorization.authenticateToken,
  BankController.create
);
routes.put(
  '/banks/:bank_id',
  BankValidator.update,
  Authorization.authenticateToken,
  BankController.update
);
routes.delete(
  '/banks/:bank_id',
  BankValidator.delete,
  Authorization.authenticateToken,
  BankController.delete
);

// Candidate
routes.get(
  '/candidates',
  CandidateValidator.getAll,
  Authorization.authenticateToken,
  CandidateController.getAll
);
routes.get(
  '/candidates/:candidate_id',
  CandidateValidator.getById,
  Authorization.authenticateToken,
  CandidateController.getById
);
routes.post(
  '/candidates/:candidate_process_id',
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
  Authorization.authenticateToken,
  CandidateController.delete
);

// Defense
routes.get(
  '/defenses',
  DefenseValidator.getAll,
  Authorization.authenticateToken,
  DefenseController.getAll
);
routes.get(
  '/defenses/:defense_id',
  DefenseValidator.getById,
  Authorization.authenticateToken,
  DefenseController.getById
);
routes.post(
  '/defenses/:defense_stud_id/:defense_bank_id/:defense_sArea_id',
  DefenseValidator.create,
  Authorization.authenticateToken,
  DefenseController.create
);
routes.put(
  '/defenses/:defense_id',
  DefenseValidator.update,
  Authorization.authenticateToken,
  DefenseController.update
);
routes.delete(
  '/defenses/:defense_id',
  DefenseValidator.delete,
  Authorization.authenticateToken,
  DefenseController.delete
);

// Professor
routes.get(
  '/professors',
  ProfessorValidator.getAll,
  Authorization.authenticateToken,
  ProfessorController.getAll
);
routes.get(
  '/professors/:prof_id',
  ProfessorValidator.getById,
  Authorization.authenticateToken,
  ProfessorController.getById
);
routes.post(
  '/professors',
  ProfessorValidator.create,
  Authorization.authenticateToken,
  ProfessorController.create
);
routes.put(
  '/professors/:prof_id',
  ProfessorValidator.update,
  Authorization.authenticateToken,
  ProfessorController.update
);
routes.delete(
  '/professors/:prof_id',
  ProfessorValidator.delete,
  Authorization.authenticateToken,
  ProfessorController.delete
);

// Qualificação
routes.get(
  '/qualifications',
  QualificationValidator.getAll,
  Authorization.authenticateToken,
  QualificationController.getAll
);
routes.get(
  '/qualifications/:quali_id',
  QualificationValidator.getById,
  Authorization.authenticateToken,
  QualificationController.getById
);
routes.post(
  '/qualifications/:quali_stud_id/:quali_bank_id/:quali_sArea_id',
  QualificationValidator.create,
  Authorization.authenticateToken,
  QualificationController.create
);
routes.put(
  '/qualifications/:quali_id',
  QualificationValidator.update,
  Authorization.authenticateToken,
  QualificationController.update
);
routes.delete(
  '/qualifications/:quali_id',
  QualificationValidator.delete,
  Authorization.authenticateToken,
  QualificationController.delete
);

// Search Area
routes.get(
  '/searchAreas',
  SearchAreaValidator.getAll,
  Authorization.authenticateToken,
  SearchAreaController.getAll
);
routes.get(
  '/searchAreas/:search_area_id',
  SearchAreaValidator.getById,
  Authorization.authenticateToken,
  SearchAreaController.getById
);
routes.post(
  '/searchAreas',
  SearchAreaValidator.create,
  Authorization.authenticateToken,
  SearchAreaController.create
);
routes.put(
  '/searchAreas/:search_area_id',
  SearchAreaValidator.update,
  Authorization.authenticateToken,
  SearchAreaController.update
);
routes.delete(
  '/searchAreas/:search_area_id',
  SearchAreaValidator.delete,
  Authorization.authenticateToken,
  SearchAreaController.delete
);

// Selective Process
routes.get(
  '/selectiveProcesses',
  SelectiveProcessValidator.getAll,
  Authorization.authenticateToken,
  SelectiveProcessController.getAll
);
routes.get(
  '/selectiveProcesses/:process_id',
  SelectiveProcessValidator.getById,
  Authorization.authenticateToken,
  SelectiveProcessController.getById
);
routes.post(
  '/selectiveProcesses',
  SelectiveProcessValidator.create,
  Authorization.authenticateToken,
  SelectiveProcessController.create
);
routes.put(
  '/selectiveProcesses/:process_id',
  SelectiveProcessValidator.update,
  Authorization.authenticateToken,
  SelectiveProcessController.update
);
routes.delete(
  '/selectiveProcesses/:process_id',
  SelectiveProcessValidator.delete,
  Authorization.authenticateToken,
  SelectiveProcessController.delete
);

// Session
routes.post('/login', SessionValidator.signIn, SessionController.signIn);

// Student
routes.get(
  '/students',
  StudentValidator.getAll,
  Authorization.authenticateToken,
  StudentController.getAll
);
routes.get(
  '/students/:stud_id',
  StudentValidator.getById,
  Authorization.authenticateToken,
  StudentController.getById
);
routes.post(
  '/students/:stud_process_id/:stud_candidate_id',
  StudentValidator.create,
  Authorization.authenticateToken,
  StudentController.create
);
routes.put(
  '/students/:stud_id',
  StudentValidator.update,
  Authorization.authenticateToken,
  StudentController.update
);
routes.delete(
  '/students/:stud_id',
  StudentValidator.delete,
  Authorization.authenticateToken,
  StudentController.delete
);

module.exports = routes;
