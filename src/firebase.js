// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCBYA2p-Ydt2r6b4RemmLfsDu7-VtxRNs",
  authDomain: "yourbuddy-c7f90.firebaseapp.com",
  projectId: "yourbuddy-c7f90",
  storageBucket: "yourbuddy-c7f90.appspot.com",
  messagingSenderId: "412288227417",
  appId: "1:412288227417:web:275ad2fd81d04e1a6cf948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export const auth = getAuth(app);
  