import {useState} from "react";
import firebaseConfig from "./firebase";
import {getDatabase, ref, push} from "firebase/database";

const Addnewvol = (props) => {

  const handleAccordion = props.handleAccordion;
  
  const [fullName, setFullName] = useState ("");
  const [phone1, setPhone1] = useState ("");
  const [phone2, setPhone2] = useState ("");
  const [notes, setNotes] = useState ("");

  const [sunStart, setSunStart] = useState ("");
  const [sunEnd, setSunEnd] = useState ("");

  const [monStart, setMonStart] = useState ("");
  const [monEnd, setMonEnd] = useState ("");

  const [tueStart, setTueStart] = useState ("");
  const [tueEnd, setTueEnd] = useState ("");

  const [wedStart, setWedStart] = useState ("");
  const [wedEnd, setWedEnd] = useState ("");

  const [thuStart, setThuStart] = useState ("");
  const [thuEnd, setThuEnd] = useState ("");

  const [friStart, setFriStart] = useState ("");
  const [friEnd, setFriEnd] = useState ("");
  
  const [satStart, setSatStart] = useState ("");
  const [satEnd, setSatEnd] = useState ("");
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const database = getDatabase(firebaseConfig);
   
    const databaseRef = ref(database);
   

    push(databaseRef, {
  
      fullName: `${fullName}`,
      phone1: `${phone1}`,
      phone2: `${phone2}`,
      notes: `${notes}`,
      avail: {
        Sun: {start:`${sunStart}`, end:`${sunEnd}`},
        Mon: {start:`${monStart}`, end:`${monEnd}`},
        Tue: {start:`${tueStart}`, end:`${tueEnd}`},
        Wed: {start:`${wedStart}`, end:`${wedEnd}`},
        Thu: {start:`${thuStart}`, end:`${thuEnd}`},
        Fri: {start:`${friStart}`, end:`${friEnd}`},
        Sat: {start:`${satStart}`, end:`${satEnd}`}
      }
    });
    setFullName("");
    setPhone1("");
    setPhone2("");
    setNotes("");
    setSunStart("");
    setSunEnd("");
    setMonStart("");
    setMonEnd("");
    setTueStart("");
    setTueEnd("");
    setWedStart("");
    setWedEnd("");
    setThuStart("");
    setThuEnd("");
    setFriStart("");
    setFriEnd("");
    setSatStart("");
    setSatEnd("");
  
  }

  return (
 <section className="form">
      <div className="accordion">
        <div className="accordionItem">
          <div className="accordionItemHeader3" onClick={()=>handleAccordion(".accordionItemHeader3")}>
            <div className="wrapper">
              <h2>Add new volunteer</h2>
            </div>
          </div>
          <div className="accordionItemBody">
            <div className="wrapper">
              
            <div className="addNewVolText">
              <p className="aboutDetails">Fill in the fields below to enter a new volunteer into the database. Enter at least one phone number and the times the new volunteer will be available in 24-hour format for each applicable day. For all day availability, enter "00:00" for the start time and "23:59" as the end time. Leave the time fields blank for days where the volunteer is not available.</p>

              <p className="aboutDetails">Once the form is completed, click the "add volunteer" button to add the new volunteer to the database. They will now appear in the "all volunteers" section of the app. </p>

              <p className="aboutDetails">To remove a volunteer, click on the "all volunteers" section to see a list of all volunteers. Find the field for the volunteer to be deleted and press the "remove volunteer" button.
              </p>
            </div>
            
            <form action="submit">

              <h3 className="h3Form">profile info</h3>

              <label htmlFor="full name"><h4>Full Name</h4></label>
              <input 
                onChange={(event)=> setFullName(event.target.value)} 
                value={fullName} 
                type="text" 
                id="name" 
                name="volunteer" 
                required 
                className="contactInfo"
                placeholder="i.e. Matt Pegg"/>

              <label htmlFor="phone 1"><h4>Primary Phone</h4></label>
              <input 
                onChange={(event)=> setPhone1(event.target.value)}  
                value={phone1} 
                type="tel" 
                id="phone1" 
                name="volunteer" required
                className="contactInfo"
                placeholder="i.e. 416-123-4567"/> 

              <label htmlFor="phone 2"><h4>Secondary Phone (optional)</h4></label>
              <input 
                onChange={(event)=> setPhone2(event.target.value)}  
                value={phone2}
                type="tel" 
                id="phone2" 
                name="volunteer"
                className="contactInfo"
                placeholder="i.e. 416-123-4567"/>

              <label htmlFor="notes"><h4>Notes (optional)</h4></label>
              <input 
                onChange={(event)=> setNotes(event.target.value)} 
                value={notes}
                type="text" 
                id="name" 
                name="volunteer" 
                className="contactInfo"
                placeholder="i.e. send text if no answer"/>

            
              <h3 className="h3Form">availability</h3>

              <fieldset>
                <legend><h4>Sunday</h4></legend>            
                  <label htmlFor="Sunday start"><h5>Start</h5></label>
                  <input 
                    onChange={(event)=> setSunStart(event.target.value)} 
                    type="time" 
                    id="time" 
                    name="volunteer" 
                    value={sunStart}
                    className="timeInfo"
                    />       

                  <label htmlFor="Sunday end"><h5>End</h5></label>
                  <input 
                    onChange={(event)=> setSunEnd(event.target.value)} 
                    type="time" 
                    id="time" 
                    name="volunteer" 
                    value={sunEnd}
                    className="timeInfo"/>
              </fieldset>

              <fieldset>
                <legend><h4>Monday</h4></legend>
                <label htmlFor="Monday start"><h5>Start</h5></label>
                <input 
                  onChange={(event)=> setMonStart(event.target.value)} 
                  type="time" 
                  id="time" 
                  name="volunteer" 
                  value={monStart}
                  className="timeInfo"/>

                <label htmlFor="Monday end"><h5>End</h5></label>
                <input 
                  onChange={(event)=> setMonEnd(event.target.value)} 
                  type="time" 
                  id="time" 
                  name="volunteer" 
                  value={monEnd}
                  className="timeInfo"/>
              </fieldset>  

            <fieldset>
              <legend><h4>Tuesday</h4></legend>
              <label htmlFor="Tuesday start"><h5>Start</h5></label>
              <input 
                onChange={(event)=> setTueStart(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={tueStart}
                className="timeInfo"/>

              <label htmlFor="Tuesday end"><h5>End</h5></label>
              <input 
                onChange={(event)=> setTueEnd(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={tueEnd}
                className="timeInfo"/>
            </fieldset>

            <fieldset>
              <legend><h4>Wednesday</h4></legend>
              <label htmlFor="Wednesday start"><h5>Start</h5></label>
              <input 
                onChange={(event)=> setWedStart(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={wedStart}
                className="timeInfo"/>

              <label htmlFor="Wednesday end"><h5>End</h5></label>
              <input 
                onChange={(event)=> setWedEnd(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={wedEnd}
                className="timeInfo"/>
            </fieldset>

            <fieldset>
              <legend><h4>Thursday</h4></legend>
              <label htmlFor="Thursday start"><h5>Start</h5></label>
              <input 
                onChange={(event)=> setThuStart(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={thuStart}
                className="timeInfo"/>

              <label htmlFor="Thursday end"><h5>End</h5></label>
              <input 
                onChange={(event)=> setThuEnd(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={thuEnd}
                className="timeInfo"/>
            </fieldset>

            <fieldset>
              <legend><h4>Friday</h4></legend>
              <label htmlFor="Friday start"><h5>Start</h5></label>
              <input 
                onChange={(event)=> setFriStart(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={friStart}
                className="timeInfo"/>
              <label htmlFor="Friday end"><h5>End</h5></label>
              <input 
                onChange={(event)=> setFriEnd(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={friEnd}
                className="timeInfo"/>
            </fieldset>

            <fieldset>
              <legend><h4>Saturday</h4></legend>
              <label htmlFor="Saturday start"><h5>Start</h5></label>
              <input 
                onChange={(event)=> setSatStart(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={satStart}
                className="timeInfo"/>

              <label htmlFor="Saturday end"><h5>End</h5></label>
              <input 
                onChange={(event)=> setSatEnd(event.target.value)} 
                type="time" 
                id="time" 
                name="volunteer" 
                value={satEnd}
                className="timeInfo"/>
            </fieldset>
              <button onClick ={handleFormSubmit} className="submitVol">Add Volunteer</button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </section> 
  )
}

export default Addnewvol;