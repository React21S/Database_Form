// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "@firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj-HWw3zommx6yV088t-5IGDmOV0ylmKU",
  authDomain: "fir-react-81b59.firebaseapp.com",
  projectId: "fir-react-81b59",
  storageBucket: "fir-react-81b59.appspot.com",
  messagingSenderId: "716692324097",
  appId: "1:716692324097:web:2461a3446b60101683e500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();