
const About = (props)=> {

  const handleAccordion = props.handleAccordion;

  return (
    <section className="about">
      <div className="accordion">
        <div className="accordionItem">           
          <div className="accordionItemHeader" onClick={()=>handleAccordion(".accordionItemHeader")}>
            <div className="wrapper">
              <h2>About this app</h2>
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
  )
}

export default About 