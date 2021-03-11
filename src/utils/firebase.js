const firebase = require('firebase/app')
require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
}

firebase.initializeApp(firebaseConfig)
/*
module.exports = {
    async createNewUser(email, password){
      try{

      }catch (error)
        const result = await firebase.auth().createUserWithEmailAndPassword(email,password);

        return result.user.uid;
    } 
} */
