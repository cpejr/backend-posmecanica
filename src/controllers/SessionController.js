const jwt = require('jsonwebtoken');
const Firebase = require('../utils/firebase');
const AdmModel = require('../models/AdmModel');
const StudentModel = require('../models/StudentModel');
const ProfessorModel = require('../models/ProfessorModel');

module.exports = {
  async signIn(request, response) {
    try {
      const { email, password, type } = request.body;
      const firebaseId = await Firebase.login(email, password);
      let user;
      switch (type) {
        case 'professor':
          user = await ProfessorModel.getByFields({
            prof_firebase: firebaseId,
          });
          break;
        case 'administrator':
          user = await AdmModel.getByFields({ adm_firebase: firebaseId });
          break;
        default:
          user = await StudentModel.getByFields({ stud_firebase: firebaseId });
      }
      user.type = type;
      const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });

      return response.status(200).json({ user, accessToken });
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
