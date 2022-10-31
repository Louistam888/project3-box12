
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
                <p className="aboutDetails">This mobile app streamlines dispatching
                of on-call volunteers for the Box 12 Association, who staff a canteen vehicle for Toronto Fire Services.</p>

                <p className="aboutDetails"> All currently available volunteers are updated every 10 seconds. </p>
               
                <p className="aboutDetails"> PLEASE NOTE: This is a demonstration version of the app, and contains no confidential contact information.</p>

                <p className="aboutDetails"> Founded in 1948, the Box 12 Association has been providing continous support to Toronto firefighters for over 80 years. This all-volunteer organization brings much-needed refreshments and nourishment to emergency crews at large emergency scenes. The organization's name comes alarm box 12, which was pulled in 1904 to summon emergency crews at the outbreak of the Great Toronto Fire - the largest in Toronto's history. 
                </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section> 
  )
}

export default About 