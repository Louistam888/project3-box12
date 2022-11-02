//THIS COMPONENT INITIALIZES FIREBASE DATABASE

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBs5n2tU0zC9yBGyc_U08O4gPhLUApGQA0",
  authDomain: "box12volunteerdb.firebaseapp.com",
  databaseURL: "https://box12volunteerdb-default-rtdb.firebaseio.com",
  projectId: "box12volunteerdb",
  storageBucket: "box12volunteerdb.appspot.com",
  messagingSenderId: "1094467017598",
  appId: "1:1094467017598:web:f688b084ee114adb2f312f"
};

const app = initializeApp(firebaseConfig);

export default app;