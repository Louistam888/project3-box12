import './App.css';
import Header from "./Header";
import Allvolunteers from "./Allvolunteers";
import firebaseConfig from "./firebase";
import {getDatabase, ref, push, onValue, remove} from "firebase/database"; 

import {useState, useEffect} from "react";


function App() {

  //USE STATE FOR TIME 
  

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

    <div>
    
      <Header />
      
      <Allvolunteers list = {all} />

    </div>
  );
}

export default App;
