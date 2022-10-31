
import {useState, useEffect} from "react";
import Volunteer from "./Volunteer";
import firebaseConfig from "./firebase";
import {getDatabase, ref, onValue, push} from "firebase/database"; 

const Allvolunteers = (props) => {

  const handleAccordion = props.handleAccordion;
  const allVolsArray = props.list;

  const [allVols, setAllVols] = useState ("");

  return (

  <div>
    <section className="everyone">
      <div className="accordion">
        <div className="accordionItem">
          <div className="accordionItemHeader2" onClick={()=>handleAccordion(".accordionItemHeader2")}>
            <div className="wrapper">
              <h2 className="h2">All volunteers</h2>
            </div> 
          </div>
          <div className="accordionItemBody">
            <div className="wrapper">
              <div className="accordionContent">
              <ul className="allVols">
                {
                  allVolsArray.map((person, index) => {
                    return <Volunteer details = {person}
                                      key = {index} />
                  })
                }
              </ul>
              </div>           
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default Allvolunteers;