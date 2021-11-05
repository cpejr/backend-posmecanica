const express = require('express');

const sessionRouter = express.Router();

const SessionController = require('../../controllers/SessionController');
const SessionValidator = require('../../validators/SessionValidator');

const { authenticateToken } = require('../../middlewares/authentication');

sessionRouter.post('/forgotten_password', SessionController.forgottenPassword);

sessionRouter.post('/', SessionValidator.signIn, SessionController.signIn);

sessionRouter.get('/verify', authenticateToken, SessionController.verifyUser);

module.exports = sessionRouter;
