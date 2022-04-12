/* eslint-disable prettier/prettier */
const express = require('express');

const professor_disciplineRouter = express.Router();

const Professor_DisciplineController = require('../../controllers/Professor_DisciplineController');
const Professor_DisciplineValidator = require('../../validators/Professor_DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

professor_disciplineRouter.post(
    '/connect/professor_discipline/:pd_professor_id',
    Professor_DisciplineValidator.connect,
    authenticateToken,
    Professor_DisciplineController.connect
);
professor_disciplineRouter.delete(
    '/disconnect/professor_discipline/:professor_dis_id',
    Professor_DisciplineValidator.disconnect,
    authenticateToken,
    Professor_DisciplineController.disconnect
);
professor_disciplineRouter.get(
    '/getAll/professor_discipline',
    Professor_DisciplineValidator.getAll,
    authenticateToken,
    Professor_DisciplineController.getAll
);
professor_disciplineRouter.put(
    '/update/professor_discipline/:pd_dis_id',
    Professor_DisciplineValidator.update,
    authenticateToken,
    Professor_DisciplineController.update
);

module.exports = professor_disciplineRouter;
