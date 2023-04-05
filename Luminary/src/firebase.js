import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "firebase/auth"
import dotenv from 'dotenv';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp(
  {
  
    apiKey: "AIzaSyCgEAqRNhnjjVjHrg2s9t9XMgtVxzuwSM8",
    authDomain: "lambda-fe7dc.firebaseapp.com",
    projectId: "lambda-fe7dc",
    storageBucket: "lambda-fe7dc.appspot.com",
    messagingSenderId: "481214128949",
    appId: "1:481214128949:web:6d8fa0eeb3f3069d86e27c",
    measurementId: "G-SLF26LF4SB"
});

// Initialize Firebase


export const db = getFirestore(app);
export const auth = getAuth(app);