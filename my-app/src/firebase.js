// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDO8fdrdKQpn7jFiB0piXTNlV9CATsOZDk",

  authDomain: "chatapp-7080f.firebaseapp.com",

  projectId: "chatapp-7080f",

  storageBucket: "chatapp-7080f.appspot.com",

  messagingSenderId: "2229742001",

  appId: "1:2229742001:web:0891b2643e1d2edc533590"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)