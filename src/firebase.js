// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNtx6aPPm96_0b281plYupMHoZ8RUQBBA",
  authDomain: "react-notes-1a657.firebaseapp.com",
  projectId: "react-notes-1a657",
  storageBucket: "react-notes-1a657.appspot.com",
  messagingSenderId: "568637623391",
  appId: "1:568637623391:web:188e184dba9d76c0531fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")