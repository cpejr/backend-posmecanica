const express = require('express');
const defenseRouter = express.Router();

const DefenseController = require('../../controllers/DefenseController');
const DefenseValidator = require('../../validators/DefenseValidator');

const { authenticateToken } = require('../../middlewares/authentication');

defenseRouter.get(
    '/defenses',
    DefenseValidator.getAll,
    authenticateToken,
    DefenseController.getAll
  );
  defenseRouter.get(
    '/defenses/:defense_id',
    DefenseValidator.getById,
    authenticateToken,
    DefenseController.getById
  );
  defenseRouter.post(
    '/defenses/:defense_stud_id/:defense_bank_id/:defense_sArea_id',
    DefenseValidator.create,
    authenticateToken,
    DefenseController.create
  );
  defenseRouter.put(
    '/defenses/:defense_id',
    DefenseValidator.update,
    authenticateToken,
    DefenseController.update
  );
  defenseRouter.delete(
    '/defenses/:defense_id',
    DefenseValidator.delete,
    authenticateToken,
    DefenseController.delete
  );

  module.exports = defenseRouter;