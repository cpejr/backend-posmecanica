const firebase = require('firebase/app');
const admin = require('firebase-admin');
const Mail = require('../mail/mail');

require('firebase/auth');

// const serviceAccount = require('../../serviceAccountKey.json');
const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

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

  async firebaseChangeUserPassword(email) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error));
    });
  },

  async getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      admin
        .auth()
        .getUserByEmail(email)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error));
    });
  },
};
