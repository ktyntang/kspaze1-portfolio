// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSVk0QSvrY6n6Oz6SV-jjxqS7_AXWcOEs",
  authDomain: "kspaze1-gc.firebaseapp.com",
  projectId: "kspaze1-gc",
  storageBucket: "kspaze1-gc.appspot.com",
  messagingSenderId: "90513859284",
  appId: "1:90513859284:web:92112d63a05809a50c9141",
  measurementId: "G-P8G4KD9T9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

