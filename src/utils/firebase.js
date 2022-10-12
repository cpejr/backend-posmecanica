const firebase = require('firebase/app');
const admin = require('firebase-admin');

require('firebase/auth');

const serviceAccount =
  process.env.NODE_ENV === 'production'
    ? require('../../posmecanica-ufmg-firebase-adminsdk-jv8h4-68ca69e8ed.json')
    : require('../../serviceAccountKey.json');

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
    return result.uid;
  },

  async login(email, password) {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return result.user;
  },

  async changeUserPassword(uid, newPassword) {
    const result = await admin.auth().updateUser(uid, {
      password: newPassword,
    });
    return result;
  },

  async changeUserEmail(uid, newEmail) {
    const result = await admin.auth().updateUser(uid, {
      email: newEmail,
    });
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
