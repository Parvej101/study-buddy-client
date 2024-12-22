// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-hg-OOoFotn4R65DNoM4gWikBT7VfNZY",
  authDomain: "study-buddy-1d441.firebaseapp.com",
  projectId: "study-buddy-1d441",
  storageBucket: "study-buddy-1d441.firebasestorage.app",
  messagingSenderId: "274407839628",
  appId: "1:274407839628:web:6d19977506a23dce11e8a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
