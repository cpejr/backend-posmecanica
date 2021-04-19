const express = require('express');
const searchArea_professorRouter = express.Router();

const SearchArea_ProfessorController = require('../../controllers/SearchArea_ProfessorController');
const SearchArea_ProfessorValidator = require('../../validators/SearchArea_ProfessorValidator');

const { authenticateToken } = require('../../middlewares/authentication');

searchArea_professorRouter.post(
    '/connect/searchArea_professor/:sp_professor_id',
    SearchArea_ProfessorValidator.connect,
    authenticateToken,
    SearchArea_ProfessorController.connect
);
searchArea_professorRouter.delete(
    '/disconnect/searchArea_professor/:searchArea_professor_id',
    SearchArea_ProfessorValidator.disconnect,
    authenticateToken,
    SearchArea_ProfessorController.disconnect
);
searchArea_professorRouter.get(
    '/getAll/searchArea_Professor',
    SearchArea_ProfessorValidator.getAll,
    authenticateToken,
    SearchArea_ProfessorController.getAll
);


module.exports = searchArea_professorRouter;
