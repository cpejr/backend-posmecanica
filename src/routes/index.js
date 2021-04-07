const express = require('express');

const candidateRouter = require('./candidate');
const disciplineRouter = require('./discipline');
const searchAreaRouter = require('./searchArea');
const selectiveProcessRouter = require('./selectiveProcess');
const sessionRouter = require('./session');
const bank_professorRouter = require('./bank_professor');
const searchArea_disciplineRouter = require('./searchArea_discipline');
const student_disciplineRouter = require('./student_discipline');

const routes = express.Router();

routes.use('/candidate', candidateRouter);
routes.use('/discipline', disciplineRouter);
routes.use('/searchArea', searchAreaRouter);
routes.use('/selectiveProcess', selectiveProcessRouter);
routes.use('/session', sessionRouter);
routes.use('/bank_professor', bank_professorRouter);
routes.use('/searchArea_discipline', searchArea_disciplineRouter);
routes.use('/student_discipline', student_disciplineRouter);

module.exports = routes;
