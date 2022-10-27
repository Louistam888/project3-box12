// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs5n2tU0zC9yBGyc_U08O4gPhLUApGQA0",
  authDomain: "box12volunteerdb.firebaseapp.com",
  databaseURL: "https://box12volunteerdb-default-rtdb.firebaseio.com",
  projectId: "box12volunteerdb",
  storageBucket: "box12volunteerdb.appspot.com",
  messagingSenderId: "1094467017598",
  appId: "1:1094467017598:web:f688b084ee114adb2f312f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;