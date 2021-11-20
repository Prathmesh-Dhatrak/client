import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjAef6fPsX9tkaSyhl2pyItCkUkpYA1LQ",
  authDomain: "twometersquareauth-development.firebaseapp.com",
  databaseURL:"https://twometersquareauth-development-default-rtdb.firebaseio.com",
  projectId: "twometersquareauth-development",
  storageBucket: "twometersquareauth-development.appspot.com",
  messagingSenderId: "324002867272",
  appId: "1:324002867272:web:c503beb32ab31f3596507d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
