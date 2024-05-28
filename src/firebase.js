// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_91x8Q6f1l7COAbGgQO8BwElbEBN6Vrk",
  authDomain: "xi-dkv.firebaseapp.com",
  projectId: "xi-dkv",
  storageBucket: "xi-dkv.appspot.com",
  messagingSenderId: "630354977430",
  appId: "1:630354977430:web:5d7553c97390fe56e358b7",
  measurementId: "G-TV32K9M01S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
