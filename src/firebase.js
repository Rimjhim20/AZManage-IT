import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm-MzgNaBUah_138W9fW-qck7CYSgw7y8",
  authDomain: "manageit-f9cd0.firebaseapp.com",
  projectId: "manageit-f9cd0",
  storageBucket: "manageit-f9cd0.appspot.com",
  messagingSenderId: "515126453702",
  appId: "1:515126453702:web:4e51795d7b51dac746bec7",
  measurementId: "G-RNKSXXKRWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
