// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDaZGFr2ncYlf-evyTWGmfhYuv1XevKo9g",
  authDomain: "dkv-class.firebaseapp.com",
  projectId: "dkv-class",
  storageBucket: "dkv-class.appspot.com",
  messagingSenderId: "829314916015",
  appId: "1:829314916015:web:068bb08bd72ff146dc7e5a",
  measurementId: "G-EYGM1R0NW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
