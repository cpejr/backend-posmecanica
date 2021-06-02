const firebase = require('firebase/app');
const admin = require('firebase-admin');
const Mail = require('../mail/mail');

require('firebase/auth');

const serviceAccount = require('../../serviceAccountKey.json');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  database: 'https://pos-mecanica-ufmg-default-rtdb.firebaseio.com/',
});

module.exports = {
  async createNewUser(email, password, name, type) {
    const result = await admin.auth().createUser({
      email,
      password,
      displayName: type,
    });
    if (result.uid) {
      Mail.ConfirmateCreateUser(email, name, password);
    }
    return result.uid;
  },

  async login(email, password) {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return result.user;
  },

  async changeUserPassword(uid, newPassword, name) {
    const result = await admin.auth().updateUser(uid, {
      password: newPassword,
    });
    if (result.uid) {
      Mail.ConfirmateAccessAndChangePassword(result.email, name, newPassword);
    }
    return result;
  },

  async changeUserEmail(uid, newEmail, name, oldEmail) {
    const result = await admin.auth().updateUser(uid, {
      email: newEmail,
    });
    if (result.uid) {
      Mail.ChangeEmail(oldEmail, name, newEmail);
    }
    return result;
  },

  async deleteUser(uid) {
    const result = await admin.auth().deleteUser(uid);
    return result;
  },
};
