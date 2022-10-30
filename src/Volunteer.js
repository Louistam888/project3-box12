import firebaseConfig from "./firebase";
import {getDatabase, ref, remove} from "firebase/database"; 
import {useState, useEffect} from "react";

const Volunteer = (props) => {

  const person = props.details; 
  const day = props.details.avail;

  const phone1 = `tel: ${props.details.phone1}`
  const phone2 = `tel: ${props.details.phone2}`
  const phone1Alt = `call ${props.details.phone1}`
  const phone2Alt = `call ${props.details.phone2}`

  const handleRemoveVol = (deleteThis) => {
    const database= getDatabase(firebaseConfig);
    const databaseRef = ref(database, `/${deleteThis}`);
    remove(databaseRef)
  }

  return (
    <li className="vol">
      <h3>{person.fullName}</h3>

      { `${person.notes}` == 0
      ? <p className="details">Notes: N/A</p>
      : <p className="details">Notes: {person.notes}</p>  
      }     

      { `${day.Tue.start}` == 0 || `${day.Tue.end}` == 0
        ? <p className = "details"> Tue: Not available </p>
        :<p className="details">Sun: {day.Tue.start} to {day.Tue.end}</p>
      }


      {
        person.phone2 ===""
          ? <>
              <a href={phone1} className="callButton" alt={phone2Alt}>Call</a>
              <button className="removeVol" onClick={()=> {handleRemoveVol(person.object)}}>Remove volunteer</button>
           
            </>
          : 
            <>
             <a href={phone1} className="callButton" alt={phone1Alt}>Call primary</a>
             <a href={phone2} className="callButton" alt={phone2Alt}>Call secondary</a>
             <button className="removeVol" onClick={()=> {handleRemoveVol(person.object)}}>Remove volunteer</button>
            </>       
      }

      <h4>Availability</h4>

      { `${day.Sun.start}` == 0 || `${day.Sun.end}` == 0
        ? <p className = "details"> Sun: Not available </p>
        :<p className="details">Sun: {day.Sun.start} to {day.Sun.end}</p>
      }
      { `${day.Mon.start}` == 0 || `${day.Mon.end}` == 0
        ? <p className = "details"> Mon: Not available </p>
        :<p className="details">Sun: {day.Mon.start} to {day.Mon.end}</p>
      }
      { `${day.Tue.start}` == 0 || `${day.Tue.end}` == 0
        ? <p className = "details"> Tue: Not available </p>
        :<p className="details">Sun: {day.Tue.start} to {day.Tue.end}</p>
      }
      { `${day.Wed.start}` == 0 || `${day.Wed.end}` == 0
        ? <p className = "details"> Wed: Not available </p>
        :<p className="details">Sun: {day.Wed.start} to {day.Wed.end}</p>
      }
      { `${day.Thu.start}` == 0 || `${day.Thu.end}` == 0
        ? <p className = "details"> Thu: Not available </p>
        :<p className="details">Sun: {day.Thu.start} to {day.Thu.end}</p>
      }
      { `${day.Fri.start}` == 0 || `${day.Fri.end}` == 0
        ? <p className = "details"> Fri: Not available </p>
        :<p className="details">Sun: {day.Fri.start} to {day.Fri.end}</p>
      }
      { `${day.Sat.start}` == 0 || `${day.Sat.end}` == 0
        ? <p className = "details"> Sat: Not available </p>
        :<p className="details">Sun: {day.Sat.start} to {day.Sat.end}</p>
      }
    </li>
  )
}

export default Volunteer;

