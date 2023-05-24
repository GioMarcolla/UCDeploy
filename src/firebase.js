// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYnXwOuM_ZQUnS24BIktuhUZkcqfy1h7Q",
  authDomain: "unichat-1afea.firebaseapp.com",
  databaseURL: "https://unichat-1afea-default-rtdb.firebaseio.com",
  projectId: "unichat-1afea",
  storageBucket: "unichat-1afea.appspot.com",
  messagingSenderId: "240564999194",
  appId: "1:240564999194:web:45b659cded5637d375eda3",
  measurementId: "G-BTLS64ZQ8B",
};

const initFirebase = async () => {
  // Initialize Firebase
  const app = await initializeApp(firebaseConfig);
  const analytics = await getAnalytics(app);

  return { app, analytics };
};

export { initFirebase };
