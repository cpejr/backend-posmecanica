const express = require('express');
const disciplineRouter = express.Router();

const DisciplineController = require('../../controllers/DisciplineController');
const DisciplineValidator = require('../../validators/DisciplineValidator');

const { authenticateToken } = require('../../middlewares/authentication');

disciplineRouter.get(
  '/candidates',
  DisciplineValidator.getAll,
  authenticateToken,
  DisciplineController.getAll
);
disciplineRouter.get(
  '/candidates/:candidate_id',
  DisciplineValidator.getById,
  authenticateToken,
  DisciplineController.getById
);
disciplineRouter.post(
  '/candidates/:candidate_process_id',
  DisciplineValidator.create,
  DisciplineController.create
);
disciplineRouter.put(
  '/candidates/:candidate_id',
  DisciplineValidator.update,
  DisciplineController.update
);
disciplineRouter.delete(
  '/candidates/:candidate_id',
  DisciplineValidator.delete,
  authenticateToken,
  DisciplineController.delete
);

module.exports = disciplineRouter;
