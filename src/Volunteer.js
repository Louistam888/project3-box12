import firebaseConfig from "./firebase";
import {getDatabase, ref, remove} from "firebase/database"; 

const Volunteer = (props) => {

const currentTime = new Date(); 
const dayOfWeek = currentTime.toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"});


  const person = props.details; 
  const day = props.details.avail;

  const phone1 = `tel: ${props.details.phone1}`;
  const phone2 = `tel: ${props.details.phone2}`;
  const phone1Alt = `call ${props.details.phone1}`;
  const phone2Alt = `call ${props.details.phone2}`;

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

      <div className="callButtonContainer">
        {
          !person.phone2
            ? <>
                <a href={phone1} className="callButton" alt={phone2Alt}>Call</a>
              </>
            : 
              <>
              <a href={phone1} className="callButton" alt={phone1Alt}>Call primary</a>
              <a href={phone2} className="callButton" alt={phone2Alt}>Call secondary</a>
              </>       
        }
      </div>

      <button className="removeVol" onClick={()=> {handleRemoveVol(person.object)}}>Remove volunteer</button>

      <h4>Availability</h4>

        { `${day.Sun.start}` == "" || `${day.Sun.end}` ==""
          ? <p className = "timeDetails"> Sun: Not available </p>
          :<p className="timeDetails">Sun: {day.Sun.start} to {day.Sun.end}</p>
        }
        { `${day.Mon.start}` == "" || `${day.Mon.end}` == ""
          ? <p className = "timeDetails"> Mon: Not available </p>
          :<p className="timeDetails">Mon: {day.Mon.start} to {day.Mon.end}</p>
        }
        { `${day.Tue.start}` == "" || `${day.Tue.end}` == ""
          ? <p className = "timeDetails"> Tue: Not available </p>
          :<p className="timeDetails">Tue: {day.Tue.start} to {day.Tue.end}</p>
        }
        { `${day.Wed.start}` == "" || `${day.Wed.end}` == ""
          ? <p className = "timeDetails"> Wed: Not available </p>
          :<p className="timeDetails">Wed: {day.Wed.start} to {day.Wed.end}</p>
        }
        { `${day.Thu.start}` == "" || `${day.Thu.end}` == ""
          ? <p className = "timeDetails"> Thu: Not available </p>
          :<p className="timeDetails">Thu: {day.Thu.start} to {day.Thu.end}</p>
        }
        { `${day.Fri.start}` == "" || `${day.Fri.end}` == ""
          ? <p className = "timeDetails"> Fri: Not available </p>
          :<p className="timeDetails">Fri: {day.Fri.start} to {day.Fri.end}</p>
        }
        { `${day.Sat.start}` == "" || `${day.Sat.end}` == ""
          ? <p className = "timeDetails"> Sat: Not available </p>
          :<p className="timeDetails">Sat: {day.Sat.start} to {day.Sat.end}</p>
        }
   
    </li>
  )
}

export default Volunteer;

