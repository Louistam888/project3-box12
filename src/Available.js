import {useState, useEffect} from "react";
import CurrentVols from "./CurrentVols";


const Available = (props) => {

  //SET STATE FOR DAY OF WEEK 
  const [day, setDay] = useState("")

  const currentTime = new Date(day); 
  const dayOfWeek = currentTime.toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"});

 
  let hour = currentTime.getHours(); 
  hour = hour <= 9 
          ? "0" + hour 
          : hour;

  let minute = currentTime.getMinutes();
  minute = minute <= 9 
            ? "0" + minute 
            : minute;  
        
  const timeNow = `${hour}${minute}`

  useEffect (() => {
    const interval = () => {

      //fetch time and refresh component every 10 seconds
      const currentDay = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", year:"numeric", month:"short", weekday: "short", day:"numeric", hour12:false, hour: "numeric", minute:"2-digit", second: "2-digit" });   
      setDay(currentDay); 
    }
    interval();
    setInterval(interval, 10000);
    return () => clearInterval(interval);
  }, []);


  const allVolsArray = props.list; 
  const copyOfAllVolsArray = [...allVolsArray]

  const volsAvailableNow = copyOfAllVolsArray.filter((person) => {
    const availableStart = Number((person.avail[dayOfWeek].start).replace(":", ""));
    const availableEnd = Number((person.avail[dayOfWeek].end).replace(":", ""));

    return availableStart <= timeNow && availableEnd > timeNow
  })

  return (
   
      <section className="available">
        <h2 className="h2Red">Currently available</h2>
          <div className="wrapper">
            <ul className="allVols">
              {
                (volsAvailableNow.length === 0) 
                 ? (<p className="none">No volunteers available</p>) 
                 : (volsAvailableNow.map((person, index) => {
                  return <CurrentVols details = {person}
                                      key = {index} 
                                      today = {dayOfWeek}/>
                  })
                )
              }
            </ul>
          </div>
      </section>
   
  )
}

export default Available; 