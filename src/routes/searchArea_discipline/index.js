const express = require('express');
const searchArea_disciplineRouter = express.Router();

const SearchArea_DisciplineController = require('../../controllers/SearchArea_DisciplineController');
const SearchArea_DisciplineValidator = require('../../validators/SearchArea_DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

searchArea_disciplineRouter.post(
  '/connect/bank_professor/:bp_bank_id',
  SearchArea_DisciplineValidator.connect,
  authenticateToken,
  SearchArea_DisciplineController.connect
);
searchArea_disciplineRouter.delete(
  '/disconnect/bank_professor/:bank_professor_id',
  SearchArea_DisciplineValidator.disconnect,
  authenticateToken,
  SearchArea_DisciplineController.disconnect
);
searchArea_disciplineRouter.get(
  '/getAll/bank_professor',
  SearchArea_DisciplineValidator.getAll,
  authenticateToken,
  SearchArea_DisciplineController.getAll
);

module.exports = searchArea_disciplineRouter;
