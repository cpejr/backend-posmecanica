const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const CandidateController = require("./controllers/CandidateController");
const CandidateValidator = require("./validators/CandidateValidator");

const AdmController = require("./controllers/AdmController");
const AdmValidator = require("./validators/AdmValidator");

// Candidate
routes.get("/candidate", CandidateController.getAll);
routes.get(
  "/candidate/getById/:candidate_id",
  CandidateValidator.getById,
  CandidateController.getById
);
routes.post(
  "/candidate",
  CandidateValidator.create,
  CandidateController.create
);
routes.put(
  "/candidate/:candidate_id",
  CandidateValidator.update,
  CandidateController.update
);
routes.delete(
  "/candidate/:candidate_id",
  CandidateValidator.delete,
  CandidateController.delete
);

// Administrador
routes.get("/adm", AdmController.getAll);
routes.get("/adm/getById/:adm_id", AdmValidator.getById, AdmController.getById);
routes.post("/adm", AdmValidator.create, AdmController.create);
routes.put("/adm/:adm_id", AdmValidator.update, AdmController.update);
routes.delete("/adm/:adm_id", AdmValidator.delete, AdmController.delete);

module.exports = routes;
