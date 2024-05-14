// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"
import {getAuth} from "firebase/auth" 


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVTVLDUl3q9zlKPKQ8rLDw-oib-1y8UPM",
  authDomain: "myecom-a5ac0.firebaseapp.com",
  projectId: "myecom-a5ac0",
  storageBucket: "myecom-a5ac0.appspot.com",
  messagingSenderId: "948615356192",
  appId: "1:948615356192:web:d49e5bd3ef5015c43d0145",
  measurementId: "G-YVHENL3XE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth =  getAuth(app);

export {auth, fireDB}
