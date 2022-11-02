//THIS COMPONENT ASSEMBLES INFO OF ALL VOLUNTEERS, REGARDLESS OF AVAILABILITY, AND PUSHES TO CHILD COMPONENT VOLUNTEER.JS

import Volunteer from "./Volunteer";

const Allvolunteers = (props) => {

//IMPORTED FUNCTIONS FOR OPENING AND CLOSING ACCORDION MENUS, AND ARRAY OF ALL VOLUNTEERS
  const handleAccordion = props.handleAccordion;
  const allVolsArray = props.list;

  return (

  <div>
    <section className="everyone">
      <div className="accordion">
        <div className="accordionItem">
          <div className="accordionItemHeader2" onClick={()=>handleAccordion(".accordionItemHeader2")}>
            <div className="wrapper">
              <h2 className="h2">All volunteers</h2>
            </div> {/* wrapper div end */}
          </div>{/* accordionItemHeader2 div end */}
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
              </div> {/* accordionContent div end*/}
            </div>{/* wrapper div end */}
          </div>{/* accordionItemBody div end */}
        </div>{/* accordionItem div end */}
      </div>{/* accordion div end */}
    </section>
  </div>
  )
}

export default Allvolunteers;