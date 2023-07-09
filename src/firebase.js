// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHVjNwTRp9RKKE6FmcTWuT-7PKgdmFhuw",
  authDomain: "blogging-app-6f277.firebaseapp.com",
  projectId: "blogging-app-6f277",
  storageBucket: "blogging-app-6f277.appspot.com",
  messagingSenderId: "759049794354",
  appId: "1:759049794354:web:121fe088f46be7441fdd2b",
  measurementId: "G-JC2HXKWGDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
