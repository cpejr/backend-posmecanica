const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const CandidateController = require("./controllers/CandidateController");
const CandidateValidator = require("./validators/CandidateValidator");

// Users
routes.get("/candidate", CandidateController.getAll);
routes.get(
  "/candidate/getById/:candidate_id",
  CandidateValidator.getById,
  auth.authenticateToken,
  CandidateController.getById
);
routes.post(
  "/candidate",
  CandidateValidator.create,
  auth.authenticateToken,
  CandidateController.create
);
routes.put(
  "/candidate/:candidate_id",
  CandidateValidator.update,
  auth.authenticateToken,
  CandidateController.update
);
routes.delete(
  "/candidate/:candidate_id",
  CandidateValidator.delete,
  auth.authenticateToken,
  CandidateController.delete
);

module.exports = routes;
