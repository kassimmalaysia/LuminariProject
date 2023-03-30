import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHhMX8bPqlgCY8EJLqgIPRWXbmP-GI1wI",
  authDomain: "luminary-78ffe.firebaseapp.com",
  projectId: "luminary-78ffe",
  storageBucket: "luminary-78ffe.appspot.com",
  messagingSenderId: "184961532354",
  appId: "1:184961532354:web:6db23096d3279d354c165b",
  measurementId: "G-32LYP6CPH3"
});

export const auth = app.auth();
export default app;