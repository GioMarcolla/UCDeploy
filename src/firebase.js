// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFkORHDlJ5d8-H-nqKVnSE7yBRID71doc",
  authDomain: "uniconnect-5f5be.firebaseapp.com",
  projectId: "uniconnect-5f5be",
  storageBucket: "uniconnect-5f5be.appspot.com",
  messagingSenderId: "579309811793",
  appId: "1:579309811793:web:35aff7c9b295b687fc2070",
  measurementId: "G-DRLYXZN4QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
