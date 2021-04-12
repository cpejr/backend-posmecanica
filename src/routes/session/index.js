const express = require('express');
const sessionRouter = express.Router();

const SessionController = require('../../controllers/SessionController');
const SessionValidator = require('../../validators/SessionValidator');

sessionRouter.post('/login', SessionValidator.signIn, SessionController.signIn);

module.exports = sessionRouter;
