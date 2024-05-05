// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEHHgPGmA9GDI7zja19nLzSLxz3YkAd9M",
  authDomain: "nwitter-ecf95.firebaseapp.com",
  projectId: "nwitter-ecf95",
  storageBucket: "nwitter-ecf95.appspot.com",
  messagingSenderId: "493536409614",
  appId: "1:493536409614:web:c02a69eac8d647f42ba45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);