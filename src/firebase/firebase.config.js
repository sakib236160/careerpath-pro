// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDYWtLn__XaAajizEzEoAThfXorGmkNw",
  authDomain: "careerpath-pro.firebaseapp.com",
  projectId: "careerpath-pro",
  storageBucket: "careerpath-pro.firebasestorage.app",
  messagingSenderId: "996168674462",
  appId: "1:996168674462:web:7bab3b8e985ef7df959f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;