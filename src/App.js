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

import firebaseConfig from "./firebase";
import {getDatabase, ref, push, onValue, remove} from "firebase/database"; 
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
          const newObject = {object, ...data[object] }  
          newState.push(newObject)
        };
        setAllVols(newState)
      });
    }, []);

  return (

  <body>
    <div className="app">
      <Header />
    <main>
      <Available list = {all}/>
      <Allvolunteers list = {all} />
    </main>
    </div>
  </body>
   
  );
}

export default App;
