const express = require('express');
const selectiveProcessRouter = express.Router();

const SelectiveProcessController = require('../../controllers/SelectiveProcessController');
const SelectiveProcessValidator = require('../../validators/SelectiveProcessValidator');

const { authenticateToken } = require('../../middlewares/authentication');

selectiveProcessRouter.get(
  '/candidates',
  SelectiveProcessValidator.getAll,
  authenticateToken,
  SelectiveProcessController.getAll
);
selectiveProcessRouter.get(
  '/candidates/:candidate_id',
  SelectiveProcessValidator.getById,
  authenticateToken,
  SelectiveProcessController.getById
);
selectiveProcessRouter.post(
  '/candidates/:candidate_process_id',
  SelectiveProcessValidator.create,
  SelectiveProcessController.create
);
selectiveProcessRouter.put(
  '/candidates/:candidate_id',
  SelectiveProcessValidator.update,
  SelectiveProcessController.update
);
selectiveProcessRouter.delete(
  '/candidates/:candidate_id',
  SelectiveProcessValidator.delete,
  authenticateToken,
  SelectiveProcessController.delete
);

module.exports = selectiveProcessRouter;
