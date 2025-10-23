// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD965oHEUu9hBcldwe7pvupPMUUt4hXmA8",
  authDomain: "assignment-9-2a91b.firebaseapp.com",
  projectId: "assignment-9-2a91b",
  storageBucket: "assignment-9-2a91b.firebasestorage.app",
  messagingSenderId: "51840481829",
  appId: "1:51840481829:web:0684180b4431db48d1ddcc"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export default auth;