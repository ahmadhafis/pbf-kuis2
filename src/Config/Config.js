import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyCKkf4bXuZf0pfceXXPM3w7vaKYXJjCAHY",
  authDomain: "kuis2-ddde5.firebaseapp.com",
  projectId: "kuis2-ddde5",
  storageBucket: "kuis2-ddde5.appspot.com",
  messagingSenderId: "1093902566114",
  appId: "1:1093902566114:web:0ae153d6c9322830ee94bb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;
