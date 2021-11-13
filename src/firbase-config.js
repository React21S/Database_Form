// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "@firebase/firestore"; // should be name like this 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaGJriCJTQLfUJgsUs_9ud1-zlf7C4OCg",
  authDomain: "fir-app-cc3c8.firebaseapp.com",
  projectId: "fir-app-cc3c8",
  storageBucket: "fir-app-cc3c8.appspot.com",
  messagingSenderId: "299247248740",
  appId: "1:299247248740:web:62009685e83115552b0671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();