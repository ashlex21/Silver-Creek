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
  };

  export  const createUserProfileDocument = async (userAuth, additionalData) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists){
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch(err){
    console.log('error creating user', err.message);
  }
}
 return userRef;


  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;