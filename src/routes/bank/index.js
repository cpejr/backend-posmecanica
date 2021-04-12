const express = require('express');
const bankRouter = express.Router();

const BankController = require('../../controllers/BankController');
const BankValidator = require('../../validators/BankValidator');

const { authenticateToken } = require('../../middlewares/authentication');

bankRouter.get(
    '/banks',
    BankValidator.getAll,
    authenticateToken,
    BankController.getAll
);
bankRouter.get(
    '/banks/:bank_id',
    BankValidator.getById,
    authenticateToken,
    BankController.getById
);
bankRouter.post(
    '/banks',
    BankValidator.create,
    authenticateToken,
    BankController.create
);
bankRouter.put(
    '/banks/:bank_id',
    BankValidator.update,
    authenticateToken,
    BankController.update
);
bankRouter.delete(
    '/banks/:bank_id',
    BankValidator.delete,
    authenticateToken,
    BankController.delete
);

module.exports = bankRouter;