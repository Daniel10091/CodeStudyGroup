import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAY56O_OHeooB7uzpWiW2dog8MPn8uE1Eg",
  authDomain: "codestudygroup-28807.firebaseapp.com",
  databaseURL: "https://codestudygroup-28807-default-rtdb.firebaseio.com",
  projectId: "codestudygroup-28807",
  storageBucket: "codestudygroup-28807.appspot.com",
  messagingSenderId: "345673636949",
  appId: "1:345673636949:web:d791521dd7c4443f88c8dc"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
