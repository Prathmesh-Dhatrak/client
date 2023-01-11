import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKT07CVQwG5JquYU_5iDoG1nt-cR5Lj_E",
  authDomain: "twometersquare.firebaseapp.com",
  databaseURL:
    "https://twometersquare-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twometersquare",
  storageBucket: "twometersquare.appspot.com",
  messagingSenderId: "611467978625",
  appId: "1:611467978625:web:a9d72ffd3ad53a06f8ea80",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
