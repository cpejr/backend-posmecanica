const express = require('express');

// Principais
const administratorRouter = require('./administrator');
const bankRouter = require('./bank');
const candidateRouter = require('./candidate');
const defenseRouter = require('./defense');
const disciplineRouter = require('./discipline');
const professorRouter = require('./professor');
const qualificationRouter = require('./qualification');
const searchAreaRouter = require('./searchArea');
const selectiveProcessRouter = require('./selectiveProcess');
const sessionRouter = require('./session');
const studentRouter = require('./student');

// Relacionais
const bank_professorRouter = require('./bank_professor');
const professor_disciplineRouter = require('./professor_discipline');
const searchArea_disciplineRouter = require('./searchArea_discipline');
const searchArea_professorRouter = require('./searchArea_professor');
const student_disciplineRouter = require('./student_discipline');
const candidate_disciplineRouter = require('./candidate_discipline');

const routes = express.Router();

// Principais
routes.use('/adms', administratorRouter);
routes.use('/banks', bankRouter);
routes.use('/candidates', candidateRouter);
routes.use('/defenses', defenseRouter);
routes.use('/disciplines', disciplineRouter);
routes.use('/professors', professorRouter);
routes.use('/qualifications', qualificationRouter);
routes.use('/searchAreas', searchAreaRouter);
routes.use('/selectiveProcesses', selectiveProcessRouter);
routes.use('/login', sessionRouter);
routes.use('/students', studentRouter);

// Relacionais
routes.use('/', bank_professorRouter);
routes.use('/', professor_disciplineRouter);
routes.use('/', searchArea_disciplineRouter);
routes.use('/', searchArea_professorRouter);
routes.use('/', student_disciplineRouter);
routes.use('/', candidate_disciplineRouter);

module.exports = routes;
