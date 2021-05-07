const express = require('express');
const bankRouter = express.Router();

const BankController = require('../../controllers/BankController');
const BankValidator = require('../../validators/BankValidator');

const { authenticateToken } = require('../../middlewares/authentication');

bankRouter.get(
    '/',
    BankValidator.getAll,
    authenticateToken,
    BankController.getAll
);
bankRouter.get(
    '/:bank_id',
    BankValidator.getById,
    authenticateToken,
    BankController.getById
);
bankRouter.post(
    '/',
    BankValidator.create,
    authenticateToken,
    BankController.create
);
bankRouter.put(
    '/:bank_id',
    BankValidator.update,
    authenticateToken,
    BankController.update
);
bankRouter.delete(
    '/:bank_id',
    BankValidator.delete,
    authenticateToken,
    BankController.delete
);

module.exports = bankRouter;