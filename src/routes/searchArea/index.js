const express = require('express');
const searchAreaRouter = express.Router();

const SearchAreaController = require('../../controllers/SearchAreaController');
const SearchAreaValidator = require('../../validators/SearchAreaValidator');

const { authenticateToken } = require('../../middlewares/authentication');

searchAreaRouter.get(
  '/candidates',
  SearchAreaValidator.getAll,
  authenticateToken,
  SearchAreaController.getAll
);
searchAreaRouter.get(
  '/candidates/:candidate_id',
  SearchAreaValidator.getById,
  authenticateToken,
  SearchAreaController.getById
);
searchAreaRouter.post(
  '/candidates/:candidate_process_id',
  SearchAreaValidator.create,
  SearchAreaController.create
);
searchAreaRouter.put(
  '/candidates/:candidate_id',
  SearchAreaValidator.update,
  SearchAreaController.update
);
searchAreaRouter.delete(
  '/candidates/:candidate_id',
  SearchAreaValidator.delete,
  authenticateToken,
  SearchAreaController.delete
);

module.exports = searchAreaRouter;
