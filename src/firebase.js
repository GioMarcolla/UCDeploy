// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import FBConsts from '../env/firebase.json'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FBConsts.apiKey,
  authDomain: FBConsts.authDomain,
  projectId: FBConsts.projectId,
  storageBucket: FBConsts.storageBucket,
  messagingSenderId: FBConsts.messagingSenderId,
  appId: FBConsts.appId,
  measurementId: FBConsts.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
