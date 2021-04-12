const express = require('express');
const administratorRouter = express.Router();

const AdmController = require('../../controllers/AdmController');
const AdmValidator = require('../../validators/AdmValidator');

const { authenticateToken } = require('../../middlewares/authentication');

administratorRouter.get(
    '/adms',
    authenticateToken,
    AdmController.getAll
);
administratorRouter.get(
    '/adms/:adm_id',
    AdmValidator.getById,
    authenticateToken,
    AdmController.getById
);
administratorRouter.post(
    '/adms',
    AdmValidator.create,
    authenticateToken,
    AdmController.create
);
administratorRouter.put(
    '/adms/:adm_id',
    AdmValidator.update,
    authenticateToken,
    AdmController.update
);
administratorRouter.delete(
    '/adms/:adm_id',
    AdmValidator.delete,
    authenticateToken,
    AdmController.delete
);

module.exports = administratorRouter;