import { Component } from "react";
import {useState, useEffect} from "react";

const Header = (props) => {
  
    //USE STATE FOR FETCHING CURRENT TIME 
    const [time, setTime] = useState("")
    const currentTime = time; 

    const handleAccordion = props.handleAccordion;

    

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
          </div>
        </div>
      </div>
    </header>
  
    <section className="about">
      <div className="accordion">
        <div className="accordionItem">           
          <div className="accordionItemHeader" onClick={handleAccordion}>
            <div className="wrapper">
              <h2 className ="h2Black">About</h2>
            </div>
          </div>
          <div className="accordionItemBody">
            <div className="wrapper">
              <div className="accordionContent">
                <p className="aboutDetails">This mobile app sreamlines dispatching
                of on-call volunteers for the Box 12 Association, who staff a canteen vehicle for Toronto Fire Services.</p>

                <p className="aboutDetails"> All currently available volunteers are updated every 10 seconds. </p>
               
                <p className="aboutDetails"> PLEASE NOTE: This is a demonstration version of the app, and contains no confidential contact information.</p>
                
               
              </div>
            </div>
          </div> 
        </div>
      </div>
      
    </section>

   





  </>
  )
}

export default Header;