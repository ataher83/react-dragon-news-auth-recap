// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjm9iyuK7lmtxG1JcnyJp2dfooOGUZmHg",
  authDomain: "react-dragon-news-auth-4e31c.firebaseapp.com",
  projectId: "react-dragon-news-auth-4e31c",
  storageBucket: "react-dragon-news-auth-4e31c.appspot.com",
  messagingSenderId: "381710856980",
  appId: "1:381710856980:web:7b2051a5bf5cd9cf608801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;