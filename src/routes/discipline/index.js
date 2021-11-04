const express = require('express');
const disciplineRouter = express.Router();

const DisciplineController = require('../../controllers/DisciplineController');
const DisciplineValidator = require('../../validators/DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

disciplineRouter.get(
  '/',
  DisciplineValidator.getAll,
  DisciplineController.getAll
);
disciplineRouter.get(
  '/:discipline_id',
  DisciplineValidator.getById,
  DisciplineController.getById
);
disciplineRouter.post(
  '/',
  DisciplineValidator.create,
  DisciplineController.create
);
disciplineRouter.put(
  '/:discipline_id',
  DisciplineValidator.update,
  DisciplineController.update
);
disciplineRouter.delete(
  '/discipline/:discipline_id',
  DisciplineValidator.delete,
  authenticateToken,
  DisciplineController.delete
);

module.exports = disciplineRouter;
