import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyAm-MzgNaBUah_138W9fW-qck7CYSgw7y8",
  authDomain: "manageit-f9cd0.firebaseapp.com",
  projectId: "manageit-f9cd0",
  storageBucket: "manageit-f9cd0.appspot.com",
  messagingSenderId: "515126453702",
  appId: "1:515126453702:web:4e51795d7b51dac746bec7",
  measurementId: "G-RNKSXXKRWC",
  databaseURL: "https://manageit-f9cd0-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const db = firebase.database();
const dbRef = db.ref();

const auth = firebase.auth();

export { db, dbRef, auth,firebase,firestore};

