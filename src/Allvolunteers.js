import firebaseConfig from "./firebase";
import Volunteer from "./Volunteer";
import{ useState } from "react";

// import {useState, useEffect} from "react";
// import {getDatabase, ref, push, onValue, remove} from "firebase/database"; 

// const [allVols, setAllVols] = useState("")

const Allvolunteers = (props) => {
  const allVolsArray = props.list;

//  allVolsArray.forEach((person)=>{
//       person.fullName
//   })     

  return (
   <ul className="allVols">
    {
      allVolsArray.map((person) => {
        return <Volunteer details ={person} />
      })
    }
      
   </ul>
  )
}

export default Allvolunteers;