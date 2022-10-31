import './App.css';

//COMPONENTS 
import Header from "./Header";
import Available from './Available';
import Allvolunteers from "./Allvolunteers";
import Addnewvol from "./Addnewvol";
import About from "./About";

//SASS
import "./partials/setup.scss";
import "./partials/typography.scss";
import "./partials/header.scss";
import "./partials/allVolunteers.scss";
import "./partials/available.scss";
import "./partials/currentVols.scss";
import "./partials/mediaQueries.scss";
import "./partials/volunteer.scss";
import "./partials/accordion.scss";

import firebaseConfig from "./firebase";
import {getDatabase, ref, onValue} from "firebase/database"; 
import {useState, useEffect} from "react";

function App() {
    
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


  const accordion = (param) => {

    accordion.accordionItemHeader = document.querySelectorAll(param);
    accordion.accordionItemHeader.forEach(header => {
      
        header.classList.toggle("active");
      
        const accordionItemBody = header.nextElementSibling;
    
        if (header.classList.contains("active")) {    
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";  
        } else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
  }
   
  //function for fetching current Time
  const updatedTime = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", year:"numeric", month:"short", weekday: "short", day:"numeric", hour12:false, hour: "numeric", minute:"2-digit", second: "2-digit" });   

  return (

    <div className="app">
      <Header handleAccordion = {accordion}
              updatedTime = {updatedTime}/>
      <div>
        <Available list = {all} />
        <Allvolunteers list = {all}
                       handleAccordion ={accordion} />
        <Addnewvol handleAccordion={accordion}/>
        <About handleAccordion={accordion} />
      </div>
    </div>
  );
}

export default App;
