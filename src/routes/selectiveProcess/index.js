const express = require('express');

const selectiveProcessRouter = express.Router();

const SelectiveProcessController = require('../../controllers/SelectiveProcessController');
const SelectiveProcessValidator = require('../../validators/SelectiveProcessValidator');

const { authenticateToken } = require('../../middlewares/authentication');

selectiveProcessRouter.get(
  '/',
  SelectiveProcessValidator.getAll,
  SelectiveProcessController.getAll
);
selectiveProcessRouter.get(
  '/:process_id',
  SelectiveProcessValidator.getById,
  SelectiveProcessController.getById
);
selectiveProcessRouter.post(
  '/',
  SelectiveProcessValidator.create,
  SelectiveProcessController.create
);
selectiveProcessRouter.put(
  '/:process_id',
  SelectiveProcessValidator.update,
  SelectiveProcessController.update
);
selectiveProcessRouter.delete(
  '/:process_id',
  SelectiveProcessValidator.delete,
  authenticateToken,
  SelectiveProcessController.delete
);

module.exports = selectiveProcessRouter;
