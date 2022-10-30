import {useState, useEffect} from "react";
import CurrentVols from "./CurrentVols";


const Available = (props) => {

  //SET STATE FOR DAY OF WEEK 
  const [day, setDay] = useState("")
  const currentTime = new Date(day); 

  const dayOfWeek = currentTime.toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"});

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
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
    const availableStart = person.avail[dayOfWeek].start;
    const availableEnd = person.avail[dayOfWeek].end;

    return availableStart <= timeNow && availableEnd >= timeNow
  })

  return (
    <div className="wrapper">
      <section className="available">
          <h2>Currently available</h2>
            <ul className="allVols">
              {
                (volsAvailableNow.length == 0) 
                 ? (<p>No volunteers available</p>) 
                 : (volsAvailableNow.map((person, index) => {
                  return <CurrentVols details = {person}
                                      key = {index} 
                                      today = {dayOfWeek}/>
                  })
                )
              }
            </ul>
      </section>
    </div>
  )
}

export default Available; 