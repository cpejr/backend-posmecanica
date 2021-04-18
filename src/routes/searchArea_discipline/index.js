const express = require('express');
const searchArea_disciplineRouter = express.Router();

const SearchArea_DisciplineController = require('../../controllers/SearchArea_DisciplineController');
const SearchArea_DisciplineValidator = require('../../validators/SearchArea_DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

searchArea_disciplineRouter.post(
  '/connect/searchArea_discipline/:sAd_dis_id',
  SearchArea_DisciplineValidator.connect,
  authenticateToken,
  SearchArea_DisciplineController.connect
);
searchArea_disciplineRouter.delete(
  '/disconnect/searchArea_discipline/:search_dis_id',
  SearchArea_DisciplineValidator.disconnect,
  authenticateToken,
  SearchArea_DisciplineController.disconnect
);
searchArea_disciplineRouter.get(
  '/getAll/searchArea_discipline',
  SearchArea_DisciplineValidator.getAll,
  authenticateToken,
  SearchArea_DisciplineController.getAll
);

module.exports = searchArea_disciplineRouter;
