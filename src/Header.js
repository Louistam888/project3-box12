import {useState, useEffect} from "react";

const Header = () => {

  //TIME 

  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {

      let date = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", year:"numeric", month:"short", weekday: "long", day:"numeric", hour12:true, hour: "numeric", minute:"2-digit", second: "2-digit" });

      let day = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"});
      let hour = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", hour12:false, hour: "numeric"});
      let minutes = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", minute: "2-digit"})
     
      // const dateObject = `${day} ${hour}:${minutes}:${seconds}`

      setTime(date);
  
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
  <div className="mainTextContainer">
    <h1>Box 12 dispatch</h1>
    <p className="time">{time}</p>
    <a href="tel:123-456-7890" className="mainNumbers" >Captain's line</a>
    <a href="tel:967-1111" className="mainNumbers" >TFS Communciations</a>
  </div>
  )
}

export default Header;