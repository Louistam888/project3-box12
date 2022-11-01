//THIS COMPONENT IMPORTS INFORMATION OF ALL VOLUNTEERS, REGARDLESS OF AVAILABILITY, FROM ALLVOLUNTEERS.JS AND RENDERS INFORMATION FOR EACH VOLUNTEER

import firebaseConfig from "./firebase";
import {getDatabase, ref, remove} from "firebase/database"; 

const Volunteer = (props) => {

  //IMPORTED INFORMATION OF ALL VOLUNTEERS
  const person = props.details; 
  const day = props.details.avail;

  const phone1 = `tel: ${props.details.phone1}`;
  const phone2 = `tel: ${props.details.phone2}`;
  const phone1Alt = `call ${props.details.phone1}`;
  const phone2Alt = `call ${props.details.phone2}`;

  //FUNCTION FOR DELETING VOLUNTEERS FROM DATABASE
  const handleRemoveVol = (deleteThis) => {
    const database= getDatabase(firebaseConfig);
    const databaseRef = ref(database, `/${deleteThis}`);
    remove(databaseRef)
  }

  return (
    <li className="vol">
      <h3>{person.fullName}</h3>

      { `${person.notes}` === ""
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

        { `${day.Sun.start}` === "" || `${day.Sun.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Sunday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Sun.start}` === "00:00" && `${day.Sun.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Sunday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Sun.start}` && `${day.Sun.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Sunday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Sun.start} to {day.Sun.end}</p>
                  </div>
                </div> 
              : `${null}`
        }

        { `${day.Mon.start}` === "" || `${day.Mon.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Monday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Mon.start}` === "00:00" && `${day.Mon.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Monday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Mon.start}` && `${day.Mon.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Monday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Mon.start} to {day.Mon.end}</p>
                  </div>
                </div> 
              : `${null}`
        }
      
        { `${day.Tue.start}` === "" || `${day.Tue.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Tuesday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Tue.start}` === "00:00" && `${day.Tue.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Tuesday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Tue.start}` && `${day.Tue.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Tuesday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Tue.start} to {day.Tue.end}</p>
                  </div>
                </div> 
              : `${null}`
        }
      
        { `${day.Wed.start}` === "" || `${day.Wed.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Wednesday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Wed.start}` === "00:00" && `${day.Wed.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Wednesday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Wed.start}` && `${day.Wed.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Wednesday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Wed.start} to {day.Wed.end}</p>
                  </div>
                </div> 
              : `${null}`
        }
      
        { `${day.Thu.start}` === "" || `${day.Thu.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Thursday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Thu.start}` === "00:00" && `${day.Thu.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Thursday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Thu.start}` && `${day.Thu.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Thursday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Thu.start} to {day.Thu.end}</p>
                  </div>
                </div> 
              : `${null}`
        }

        { `${day.Fri.start}` === "" || `${day.Fri.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Friday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Fri.start}` === "00:00" && `${day.Fri.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Friday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Fri.start}` && `${day.Fri.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Friday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Fri.start} to {day.Fri.end}</p>
                  </div>
                </div> 
              : `${null}`
        }

        { `${day.Sat.start}` === "" || `${day.Sat.end}` === ""
          ? <div className="timeDisplayContainer">
              <div className="timeDisplayLeft">
                <p className="timeDetails">Saturday:</p>
              </div>
              <div className="timeDisplayRight">
                <p className="timeDetails">Not available</p>
              </div>
            </div>
          : `${day.Sat.start}` === "00:00" && `${day.Sat.end}` === "23:59"
            ? <div className="timeDisplayContainer">
                <div className="timeDisplayLeft">
                  <p className="timeDetails">Saturday:</p>
                </div>
                <div className="timeDisplayRight">
                  <p className="timeDetails">All day</p>
                </div>
              </div>
            : `${day.Sat.start}` && `${day.Sat.end}` 
              ? <div className="timeDisplayContainer">
                  <div className="timeDisplayLeft">
                    <p className="timeDetails">Saturday:</p>
                  </div>
                  <div className="timeDisplayRight">
                    <p className="timeDetails">{day.Sat.start} to {day.Sat.end}</p>
                  </div>
                </div> 
              : `${null}`
        }
    </li>
  )
}

export default Volunteer;

