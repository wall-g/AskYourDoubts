import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB5rgk9dcdVMNlffFcl839arK6aZmqjrFU",
  authDomain: "ask-your-doubts.firebaseapp.com",
  projectId: "ask-your-doubts",
  storageBucket: "ask-your-doubts.appspot.com",
  messagingSenderId: "722042324450",
  appId: "1:722042324450:web:74f1d534c07530a740e5bb",
  measurementId: "G-69FY579TLC"
};

initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
