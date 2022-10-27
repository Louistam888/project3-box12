import firebaseConfig from "./firebase";
import {useState, useEffect} from "react";
import {getDatabase, ref, push, onValue, remove} from "firebase/database"; 
const Allvolunteers = () => {

  const [allVols, setAllVols] = useState([])

  useEffect (()=> {
   
    const database = getDatabase(firebaseConfig);
    
    const databaseRef = ref(database);

    onValue(databaseRef,(response)=> {

      const newState = [] 

      const data = response.val();

      // console.log(data)

      for (const object in data) {
        
        newState.push(object)
      }

      console.log(newState)

      // newState.push(data)

      // console.log(newState)

      // for (let key in data) {
      //   newState.push({key: key, name: data[key]}) 
      // }
    
      // setAllVols(newState)

      })
  },[])


  return (
   <ul className="allVols">
      <li>
        <p>{allVols}</p>
      </li>
   </ul>
  )
}

export default Allvolunteers;