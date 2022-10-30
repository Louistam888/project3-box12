import './App.css';

//COMPONENTS 
import Header from "./Header";
import Available from './Available';
import Allvolunteers from "./Allvolunteers";

//SASS
import "./partials/setup.scss";
import "./partials/typography.scss";
import "./partials/header.scss";
import "./partials/allVolunteers.scss";
import "./partials/available.scss";
import "./partials/currentVols.scss";

import firebaseConfig from "./firebase";
import {getDatabase, ref, onValue} from "firebase/database"; 
import {useState, useEffect} from "react";

function App() {
  

  //USE STATE FOR FETCHING CURRENT TIME 
  // const [time, setTime] = useState("")
  // const currentTime = time; 

  // useEffect (() => {
  //   const interval = setInterval(() => {
  //     let date = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", year:"numeric", month:"short", weekday: "short", day:"numeric", hour12:false, hour: "numeric", minute:"2-digit", second: "2-digit" });
  //     setTime(date);
        
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);


  
  //USE STATE FOR GETTING ALL VOLUNTEERS
  const [allVols, setAllVols] = useState([])
  const all = allVols;
  

  //USE EFFECT FOR FETCHING ALL VOLUNTEERS 
  useEffect (()=> {
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database);

    onValue(databaseRef,(response)=> {

      const newState = [] 
      const data = response.val();

      for (let object in data) {
        const newObject = {object, ...data[object]}  
        newState.push(newObject)
      };
      setAllVols(newState)
    });
  }, []);

  return (

    <div className="app">
      <Header  />
      <div>
        <Available list = {all} />
        <Allvolunteers list = {all} />
      </div>
    </div>

   
  );
}

export default App;
