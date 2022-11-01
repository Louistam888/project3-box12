//THIS COMPONENT IS THE HEADER ELEMENT, AND CONTAINS A CLOCK UPDATING DATE AND TIME EVERY ONE SECOND

import {useState, useEffect} from "react";

const Header = (props) => {
  
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
          <div className="mainNumbersContainer">
            <a href="tel:123-456-7890" className="mainNumbers" alt="Call 123-456-7890">Captain's line</a>
            <a href="tel:416-967-1111" className="mainNumbers" alt="Call 416-967-1111">TFS Communications</a>
          </div>{/* mainNumbersContainer div end */}
        </div>{/* mainTextContainer div end */}
      </div>{/* wrapper div end */}
    </header>
  </>
  )
}

export default Header;