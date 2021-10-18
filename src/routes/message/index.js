const express = require('express');

const messageRouter = express.Router();

const MessageController = require('../../controllers/MessageController');
const MessageValidator = require('../../validators/MessageValidator');

const { authenticateToken } = require('../../middlewares/authentication');

messageRouter.post(
  '/',
  MessageValidator.create,
  authenticateToken,
  MessageController.create
);

messageRouter.get(
  '/:id',
  MessageValidator.getById,
  authenticateToken,
  MessageController.getById
);

messageRouter.get(
  '/student/:student_id',
  MessageValidator.getByStudentId,
  authenticateToken,
  MessageController.getByStudentId
);

messageRouter.get(
  '/adm/:adm_id',
  MessageValidator.create,
  authenticateToken,
  MessageController.getByAdmId
);

// messageRouter.delete(
//   '/:message_id',
//   MessageValidator.delete,
//   authenticateToken,
//   MessageController.delete
// );

messageRouter.put(
  '/:id',
  MessageValidator.update,
  authenticateToken,
  MessageController.update
);

messageRouter.get(
  '/notification/student/:student_id',
  MessageValidator.getByStudentId,
  authenticateToken,
  MessageController.getNotificationByStudentId
);

module.exports = messageRouter;
