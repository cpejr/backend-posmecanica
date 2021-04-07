const express = require('express');
const sessionRouter = express.Router();

const SessionController = require('../../controllers/CandidateController');
const SessionValidator = require('../../validators/CandidateValidator');

sessionRouter.post('/login', SessionValidator.signIn, SessionController.signIn);

module.exports = sessionRouter;
