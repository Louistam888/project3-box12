import {useState, useEffect} from "react";

const Available = (props) => {
  const allVolsArray = props.list; 

  // let currentDay = new Date();
  // let day = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"});
  // let hour = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", hour12:false, hour: "numeric"});
  // let minute = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", minute: "2-digit"});
  // const timeNow = `${hour}${minute}`

  //SET STATE FOR DAY OF WEEK 
  const [day, setDay] = useState("")
  const currentTime = new Date(day); 



  useEffect (() => {
    const interval = () => {

      //fetch time and refresh component every 10 seconds
      const currentDayRaw = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", year:"numeric", month:"short", weekday: "short", day:"numeric", hour12:false, hour: "numeric", minute:"2-digit", second: "2-digit" });   
      
      const currentDay = new Date(currentDayRaw)
      const dayOfWeek = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"});

      const hour = currentDay.getHours();
      const minute = currentDay.getMinutes();
      const timeNow = `${hour}${minute}`
      setDay(currentDay); 


      //filter array 

     
     
    }
    interval();
    setInterval(interval, 10000);
    return () => clearInterval(interval);
  }, []);

  // const [available, setAvailable] = useState([]);



 

  // useEffect (()=> {

  //   const copyOfAllVolsArray = [...allVolsArray];
    
  //   const interval = () => {

  //     console.log(day)
  //     // copyOfAllVolsArray.filter((person, index) => {
       
  //     //   const availableStart = person;
  //     //   console.log(person)
  //     // })
  //     // const availableStart = person.avail[dayOfWeek].start;

  //     // console.log(availableStart)
  //     // const availableEnd = person.avail[day].end
  //     // console.log(availableStart)
  //     // console.log("working")
  //     // const availableEnd = (person.avail[day]).end;
    
  //     // if (availableStart >= timeNow && availableEnd <= timeNow) {
  //     //   return person
  //     // }
  //   }
  //   interval();
  //   setInterval(interval, 10000);
    
  //   return () => clearInterval(interval);
  // }, [] )

  return (
    <div className="wrapper">
      <section className="available">
          <h2>Currently available</h2>
            <ul className="allVols">
              {
                allVolsArray.map((person) => {
                  
                })
              }
            </ul>
      </section>
    </div>
  )
}

export default Available; 