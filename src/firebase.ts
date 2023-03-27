// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU-B2dfdT38VaV_7MskE2Q6Dsp59f6ZsU",
  authDomain: "discord-clone-udemy-76fe2.firebaseapp.com",
  projectId: "discord-clone-udemy-76fe2",
  storageBucket: "discord-clone-udemy-76fe2.appspot.com",
  messagingSenderId: "326129016419",
  appId: "1:326129016419:web:006c8b357c8920f1806256",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); //google auth

export { auth, provider, db };
