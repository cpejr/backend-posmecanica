const express = require('express');
const searchAreaRouter = express.Router();

const SearchAreaController = require('../../controllers/SearchAreaController');
const SearchAreaValidator = require('../../validators/SearchAreaValidator');

const { authenticateToken } = require('../../middlewares/authentication');

searchAreaRouter.get(
  '/',
  SearchAreaValidator.getAll,
  SearchAreaController.getAll
);
searchAreaRouter.get(
  '/:search_area_id',
  SearchAreaValidator.getById,
  authenticateToken,
  SearchAreaController.getById
);
searchAreaRouter.post(
  '/',
  SearchAreaValidator.create,
  authenticateToken,
  SearchAreaController.create
);
searchAreaRouter.put(
  '/:search_area_id',
  SearchAreaValidator.update,
  authenticateToken,
  SearchAreaController.update
);
searchAreaRouter.delete(
  '/:search_area_id',
  SearchAreaValidator.delete,
  authenticateToken,
  SearchAreaController.delete
);

module.exports = searchAreaRouter;
