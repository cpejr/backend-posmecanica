const express = require('express');

const administratorRouter = express.Router();

const AdmController = require('../../controllers/AdmController');
const AdmValidator = require('../../validators/AdmValidator');

const { authenticateToken } = require('../../middlewares/authentication');

administratorRouter.get('/', authenticateToken, AdmController.getAll);
administratorRouter.get(
  '/:adm_id',
  AdmValidator.getById,
  authenticateToken,
  AdmController.getById
);
administratorRouter.post(
  '/',
  AdmValidator.create,
  // authenticateToken,
  AdmController.create
);
administratorRouter.put(
  '/:adm_id',
  AdmValidator.update,
  authenticateToken,
  AdmController.update
);
administratorRouter.delete(
  '/:adm_id',
  AdmValidator.delete,
  authenticateToken,
  AdmController.delete
);

module.exports = administratorRouter;
