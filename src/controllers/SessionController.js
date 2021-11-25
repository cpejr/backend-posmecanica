const jwt = require('jsonwebtoken');
const Firebase = require('../utils/firebase');
const AdmModel = require('../models/AdmModel');
const StudentModel = require('../models/StudentModel');
const ProfessorModel = require('../models/ProfessorModel');
const firebaseUtils = require('../utils/firebase');
const CandidateModel = require('../models/CandidateModel');

module.exports = {
  async forgottenPassword(request, response) {
    try {
      const { email } = request.body;
      const res = await Firebase.firebaseChangeUserPassword(email);
      return response.status(200).json({ res });
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        notification: 'Error while trying to send reset password email',
      });
    }
  },
  async signIn(request, response) {
    try {
      const { email, password } = request.body;
      const firebase = await Firebase.login(email, password);
      let user;
      switch (firebase.displayName) {
        case 'professor': {
          user = await ProfessorModel.getByFields({
            prof_firebase: firebase.uid,
          });
          user.email = user.prof_email;
          user.name = user.prof_name;
          delete user.prof_name;
          delete user.prof_email;
          break;
        }
        default: {
          user = await StudentModel.getByFields({
            stud_firebase: firebase.uid,
          });
          user.email = user.stud_candidate_email;
          user.name = user.stud_candidate_name;
          delete user.stud_candidate_name;
          delete user.stud_candidate_email;
        }
      }
      user.type = firebase.displayName;
      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });

      return response.status(200).json({ user, accessToken });
    } catch (error) {
      if (error.code?.includes('auth')) {
        return response
          .status(403)
          .json({ notification: 'Invalid credentials' });
      }
      return response
        .status(500)
        .json({ notification: 'Error while trying to validate credentials' });
    }
  },

  async admSignIn(request, response) {
    try {
      const { email, password } = request.body;
      const firebase = await Firebase.login(email, password);

      const user = await AdmModel.getByFields({ adm_firebase: firebase.uid });
      user.email = user.adm_email;
      user.name = user.adm_name;
      delete user.adm_name;
      delete user.adm_email;

      user.type = firebase.displayName;

      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });

      return response.status(200).json({ user, accessToken });
    } catch (error) {
      if (error.code?.includes('auth')) {
        return response
          .status(403)
          .json({ notification: 'Invalid credentials' });
      }
      return response
        .status(500)
        .json({ notification: 'Error while trying to validate credentials' });
    }
  },

  async verifyUser(request, response) {
    try {
      let user;
      const authHeader = request.headers.authorization;
      const [token] = authHeader && authHeader.split(' ').reverse();

      const { user: userToken } = jwt.decode(token);

      let firebase;
      let candidate;

      if (userToken.email) {
        firebase = await firebaseUtils.getUserByEmail(userToken.email);
      } else {
        candidate = await CandidateModel.getById(userToken.stud_candidate_id);
        firebase = await firebaseUtils.getUserByEmail(
          candidate.candidate_email
        );
      }

      switch (firebase.displayName) {
        case 'professor': {
          user = await ProfessorModel.getByFields({
            prof_firebase: firebase.uid,
          });
          user.email = user.prof_email;
          user.name = user.prof_name;
          delete user.prof_name;
          delete user.prof_email;
          break;
        }
        case 'administrator': {
          user = await AdmModel.getByFields({ adm_firebase: firebase.uid });
          user.email = user.adm_email;
          user.name = user.adm_name;
          delete user.adm_name;
          delete user.adm_email;
          break;
        }
        default: {
          user = await StudentModel.getByFields({
            stud_firebase: firebase.uid,
          });
          user.email = candidate.candidate_email;
          user.name = candidate.candidate_name;
        }
      }
      user.type = firebase.displayName;

      return response.status(200).json(user);
    } catch (error) {
      if (error.code.includes('auth')) {
        return response
          .status(403)
          .json({ notification: 'Invalid credentials' });
      }
      return response
        .status(500)
        .json({ notification: 'Error while trying to validate credentials' });
    }
  },
};
