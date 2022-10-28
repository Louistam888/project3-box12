import {useState, useEffect} from "react";
import Available from "./Available";

const Header = () => {
  
    //USE STATE FOR FETCHING CURRENT TIME 
    const [time, setTime] = useState("")
    const currentTime = time; 
  
    useEffect (() => {
      const interval = () => {
        const date = new Date().toLocaleString("en-CA", {timeZone: "America/Toronto", year:"numeric", month:"short", weekday: "short", day:"numeric", hour12:false, hour: "numeric", minute:"2-digit", second: "2-digit" });   
        setTime(date);
      }
      interval();
      setInterval(interval, 1000)
      return () => clearInterval(interval);
    }, []);

    

  return (
  <>
    <header>
      <div className="wrapper">
        <div className="mainTextContainer">
          <h1>Box 12 dispatch</h1>
          <p className="time">{currentTime}</p>
          <a href="tel:123-456-7890" className="mainNumbers" alt="Call 123-456-7890">Captain's line</a>
          <a href="tel:967-1111" className="mainNumbers" alt="Call 967-1111">TFS Communciations</a>
        </div>
      </div>
    </header>
  </>
  )
}

export default Header;