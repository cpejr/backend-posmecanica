const express = require('express');

const routes = express.Router();

// const auth = require('./middlewares/authentication');

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

// Candidate
routes.get('/candidates', CandidateController.getAll);
routes.get(
  '/candidates/:candidate_id',
  CandidateValidator.getById,
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
  '/students/:stud_process_id/:stud_candidate_id',
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

// Selective Process
routes.get('/selectiveProcesses', SelectiveProcessController.getAll);
routes.get(
  '/selectiveProcesses/:process_id',
  SelectiveProcessValidator.getById,
  SelectiveProcessController.getById
);
routes.post(
  '/selectiveProcesses',
  SelectiveProcessValidator.create,
  SelectiveProcessController.create
);
routes.put(
  '/selectiveProcesses/:process_id',
  SelectiveProcessValidator.update,
  SelectiveProcessController.update
);
routes.delete(
  '/selectiveProcesses/:process_id',
  SelectiveProcessValidator.delete,
  SelectiveProcessController.delete
);

// Search Area
routes.get('/searchAreas', SearchAreaController.getAll);
routes.get(
  '/searchAreas/:search_area_id',
  SearchAreaValidator.getById,
  SearchAreaController.getById
);
routes.post(
  '/searchAreas',
  SearchAreaValidator.create,
  SearchAreaController.create
);
routes.put(
  '/searchAreas/:search_area_id',
  SearchAreaValidator.update,
  SearchAreaController.update
);
routes.delete(
  '/searchAreas/:search_area_id',
  SearchAreaValidator.delete,
  SearchAreaController.delete
);

// Banks
routes.get('/banks', BankController.getAll);
routes.get('/banks/:bank_id', BankValidator.getById, BankController.getById);
routes.post('/banks', BankValidator.create, BankController.create);
routes.put('/banks/:bank_id', BankValidator.update, BankController.update);
routes.delete('/banks/:bank_id', BankValidator.delete, BankController.delete);

// Defense
routes.get('/defenses', DefenseController.getAll);
routes.get(
  '/defenses/:defense_id',
  DefenseValidator.getById,
  DefenseController.getById
);
routes.post(
  '/defenses/:defense_stud_id/:defense_bank_id/:defense_sArea_id',
  DefenseValidator.create,
  DefenseController.create
);
routes.put(
  '/defenses/:defense_id',
  DefenseValidator.update,
  DefenseController.update
);
routes.delete(
  '/defenses/:defense_id',
  DefenseValidator.delete,
  DefenseController.delete
);

// Professor
routes.get('/professors', ProfessorController.getAll);
routes.get(
  '/professors/:prof_id',
  ProfessorValidator.getById,
  ProfessorController.getById
);
routes.post(
  '/professors',
  ProfessorValidator.create,
  ProfessorController.create
);
routes.put(
  '/professors/:prof_id',
  ProfessorValidator.update,
  ProfessorController.update
);
routes.delete(
  '/professors/:prof_id',
  ProfessorValidator.delete,
  ProfessorController.delete
);

// Qualificação
routes.get('/qualifications', QualificationController.getAll);
routes.get(
  '/qualifications/:quali_id',
  QualificationValidator.getById,
  QualificationController.getById
);
routes.post(
  '/qualifications/:quali_stud_id/:quali_bank_id/:quali_sArea_id',
  QualificationValidator.create,
  QualificationController.create
);
routes.put(
  '/qualifications/:quali_id',
  QualificationValidator.update,
  QualificationController.update
);
routes.delete(
  '/qualifications/:quali_id',
  QualificationValidator.delete,
  QualificationController.delete
);

module.exports = routes;
