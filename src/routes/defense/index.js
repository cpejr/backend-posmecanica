const express = require('express');
const defenseRouter = express.Router();

const DefenseController = require('../../controllers/DefenseController');
const DefenseValidator = require('../../validators/DefenseValidator');

const { authenticateToken } = require('../../middlewares/authentication');

defenseRouter.get(
    '/',
    DefenseValidator.getAll,
    authenticateToken,
    DefenseController.getAll
  );
  defenseRouter.get(
    '/:defense_id',
    DefenseValidator.getById,
    authenticateToken,
    DefenseController.getById
  );
  defenseRouter.post(
    '/:defense_stud_id/:defense_bank_id/:defense_sArea_id',
    DefenseValidator.create,
    authenticateToken,
    DefenseController.create
  );
  defenseRouter.put(
    '/:defense_id',
    DefenseValidator.update,
    authenticateToken,
    DefenseController.update
  );
  defenseRouter.delete(
    '/:defense_id',
    DefenseValidator.delete,
    authenticateToken,
    DefenseController.delete
  );

  module.exports = defenseRouter;