import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIMSaxS9d-MKDOZKpKQze93KLpYTPfv8o",
    authDomain: "firegram-61a22.firebaseapp.com",
    projectId: "firegram-61a22",
    storageBucket: "firegram-61a22.appspot.com",
    messagingSenderId: "334173613691",
    appId: "1:334173613691:web:3c674cc9257e9769bffcde"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };