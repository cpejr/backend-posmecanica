const { v4: uuidv4 } = require('uuid');
const CandidateModel = require('../models/CandidateModel');
const StudentModel = require('../models/StudentModel');
const firebase = require('../utils/firebase');
const {
  uploadFile,
  deleteFolder,
  getUrlFIle,
  getUserFiles,
} = require('../utils/FirebaseStore');
const Mail = require('../mail/mail');
const SelectiveProcessModel = require('../models/SelectiveProcessModel');

const buildCandidateObject = (candidate, candidate_process_id) => {
  const protocol = parseInt(Math.random() * 1000000000, 10);
  candidate.candidate_id = uuidv4();
  candidate.candidate_protocol = protocol;
  candidate.candidate_process_id = candidate_process_id;
};

async function updateFirebase(candidate, candidate_id) {
  const studentInfos = await StudentModel.getByFields({
    stud_candidate_id: candidate_id,
  });
  const firebase_id = studentInfos.stud_firebase;
  const name = studentInfos.stud_candidate_name;
  const oldEmail = studentInfos.stud_candidate_email;
  const update = await firebase.changeUserEmail(
    firebase_id,
    candidate.candidate_email,
    name,
    oldEmail
  );
  const result = update.uid;
  delete candidate.candidate_email;
  return result;
}

async function SelectiveProcessResult(candidate, candidate_id) {
  const candidateInfos = await CandidateModel.getById(candidate_id);
  const name = candidateInfos.candidate_name;
  const email = candidateInfos.candidate_email;
  Mail.SelectiveProcessResult(email, name, candidate.candidate_approval);
}

module.exports = {
  async create(request, response) {
    try {
      const candidate = request.body;
      const { candidate_process_id } = request.params;
      buildCandidateObject(candidate, candidate_process_id);
      let verify = true;

      while (verify === true) {
        candidate.candidate_protocol_number = Math.floor(
          Math.random() * (999999 - 100000 + 1) + 100000
        );
        // eslint-disable-next-line no-await-in-loop
        verify = await CandidateModel.verifyProtocolNumber(
          candidate.candidate_protocol_number
        );
      }

      await CandidateModel.create(candidate);
      const selectiveProcess = await SelectiveProcessModel.getById(
        candidate.candidate_process_id
      );

      Mail.EnrollmentProof(
        candidate.candidate_email,
        selectiveProcess.process_name,
        candidate.candidate_protocol_number
      );

      return response.status(200).json({
        id: candidate.candidate_id,
      });
    } catch (err) {
      console.error(`Candidate creation failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await CandidateModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async getById(request, response) {
    try {
      const { candidate_id } = request.params;
      const result = await CandidateModel.getById(candidate_id);

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async verifyCandidateExistence(request, response) {
    try {
      const { candidate_process_id, candidate_cpf } = request.params;
      const result = await CandidateModel.verifyCandidateExistence(
        candidate_process_id,
        candidate_cpf
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate verify failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async update(request, response) {
    try {
      const { candidate_id } = request.params;
      const candidate = request.body;
      let result;
      if (candidate.candidate_email) {
        result = await updateFirebase(candidate, candidate_id);
      }
      if (
        candidate.candidate_approval &&
        candidate.candidate_approval === true
      ) {
        candidate.candidate_approval = 1;
      } else if (
        candidate.candidate_approval &&
        candidate.candidate_approval === false
      ) {
        candidate.candidate_approval = 0;
      }
      if (candidate.candidate_approval) {
        await SelectiveProcessResult(candidate, candidate_id);
      }
      const stillExistFieldsToUpdate = Object.values(candidate).length > 0;
      if (stillExistFieldsToUpdate) {
        result = await CandidateModel.updateById(candidate_id, candidate);
      }
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate update failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async delete(request, response) {
    try {
      const { candidate_id } = request.params;
      await deleteFolder(candidate_id);
      const result = await CandidateModel.deleteById(candidate_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Candidate delete failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async upload(request, response) {
    try {
      const { candidate_id, fileName } = request.params;
      const fileId = await uploadFile(
        request.file,
        `Candidates/${candidate_id}/`,
        fileName
      );
      return response.status(200).json(fileId);
    } catch (err) {
      console.error(`Upload file failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
  async getUrl(request, response) {
    try {
      const { candidate_id, file_name } = request.params;
      const result = await getUrlFIle(candidate_id, file_name);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`List files failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },

  async getUserFiles(request, response) {
    try {
      const { candidate_id } = request.params;
      const { file_name } = request.params;
      const result = await getUserFiles(candidate_id, file_name);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`List files failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error',
      });
    }
  },
};
