import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZIU-p2GnyPGq5APv31l6Uza_pMnwW9PM",
    authDomain: "silver-creek-4a57e.firebaseapp.com",
    projectId: "silver-creek-4a57e",
    storageBucket: "silver-creek-4a57e.appspot.com",
    messagingSenderId: "86502087063",
    appId: "1:86502087063:web:3a761ae933afe4241a8cd2",
    measurementId: "G-9FJ0TEK8HW"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;