
import {useState, useEffect, useRef} from "react";
import Volunteer from "./Volunteer";
import firebaseConfig from "./firebase";
import {getDatabase, ref, onValue, push} from "firebase/database"; 

const Allvolunteers = (props) => {

  const allVolsArray = props.list;

  const [allVols, setAllVols] = useState ("");

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
  

  // const fullNameRef = useRef();
  // const phone1Ref = useRef();
 
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const database = getDatabase(firebaseConfig);
    // const randomVolNumber = Math.ceil(Math.random()*1000000);
   
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

  }

  return (
    <div className="wrapper">
      <section className="everyone">
      
        <h2>All volunteers</h2>
          <ul className="allVols">
            {
              allVolsArray.map((person, index) => {
                return <Volunteer details = {person}
                                  key = {index} />
              })
            }
          </ul>

          <h2>Add volunteer</h2>

          <form action="submit">

            <label htmlFor="full name">Full Name</label>
            <input 
              onChange={(event)=> setFullName(event.target.value)} 
              value={fullName} 
              type="text" 
              id="name" 
              name="volunteer" 
              required />

            <label htmlFor="phone 1">Primary phone</label>
            <input 
              onChange={(event)=> setPhone1(event.target.value)}  
              value={phone1} 
              type="tel" 
              id="phone1" 
              name="volunteer" required/> 

            <label htmlFor="phone 2">Secondary phone (optional)</label>
            <input 
              onChange={(event)=> setPhone2(event.target.value)}  
              value={phone2}
              type="tel" 
              id="phone2" 
              name="volunteer" />

            <label htmlFor="notes">notes (optional)</label>
            <input 
              onChange={(event)=> setNotes(event.target.value)} 
              value={notes}
              type="text" 
              id="name" 
              name="volunteer" />
          
            <h4>Sunday</h4>
            <label htmlFor="Sunday start">Start </label>
            <input 
              onChange={(event)=> setSunStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={sunStart}/>
             
            <label htmlFor="Sunday end">End </label>
            <input 
              onChange={(event)=> setSunEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={sunEnd}/>


            <h4>Monday</h4>
            <label htmlFor="Monday start">Start </label>
            <input 
              onChange={(event)=> setMonStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={monStart}/>

            <label htmlFor="Monday end">End </label>
            <input 
              onChange={(event)=> setMonEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={monEnd}/>


            <h4>Tuesday</h4>
            <label htmlFor="Tuesday start">Start </label>
            <input 
              onChange={(event)=> setTueStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={tueStart}/>

            <label htmlFor="Tuesday end">End </label>
            <input 
              onChange={(event)=> setTueEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={tueEnd}/>

            <h4>Wednesday</h4>
            <label htmlFor="Wednesday start">Start </label>
            <input 
              onChange={(event)=> wedStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={wedStart}/>

            <label htmlFor="Wednesday end">End </label>
            <input 
              onChange={(event)=> wedEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={wedEnd}/>

            <h4>Thursday</h4>
            <label htmlFor="Thursday start">Start </label>
            <input 
              onChange={(event)=> thuStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={thuStart}/>

            <label htmlFor="Thursday end">End </label>
            <input 
              onChange={(event)=> thuEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={thuEnd}/>


            <h4>Friday</h4>
            <label htmlFor="Friday start">Start </label>
            <input 
              onChange={(event)=> friStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={friStart}/>
            <label htmlFor="Friday end">End </label>
            <input 
              onChange={(event)=> friEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={friEnd}/>


            <h4>Saturday</h4>
            <label htmlFor="Saturday start">Start </label>
            <input 
              onChange={(event)=> satStart(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={satStart}/>

            <label htmlFor="Saturday end">End </label>
            <input 
              onChange={(event)=> satEnd(event.target.value)} 
              type="time" 
              id="time" 
              name="volunteer" 
              value={satEnd}/>
            <button onClick ={handleFormSubmit}>Add Volunteer</button>
          </form>
      </section>
    </div>
  )
}

export default Allvolunteers;