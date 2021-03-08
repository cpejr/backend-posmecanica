const express = require("express");
const routes = express.Router();

const CandidateController = require("./controllers/CandidateController");
const CandidateValidator = require("./validators/CandidateValidator");

// Users
routes.get("/candidate", CandidateController.getAll);
routes.get("/candidate/getById/:candidate_id", CandidateValidator.getById, CandidateController.getById);
routes.post("/candidate", CandidateValidator.create, CandidateController.create);
routes.put("/candidate/:candidate_id", CandidateValidator.update, CandidateController.update);
routes.delete("/candidate/:candidate_id", CandidateValidator.delete, CandidateController.delete);


module.exports = routes;