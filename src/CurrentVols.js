const CurrentVols = (props) => {

  const person = props.details; 
  const day = props.details.avail;
  const today = props.today;
  const todayAvailStart = props.details.avail[today].start;
  const todayAvailEnd = props.details.avail[today].end;
  const phone1 = `tel: ${props.details.phone1}`
  const phone2 = `tel: ${props.details.phone2}`
  const phone1Alt = `call ${props.details.phone1}`
  const phone2Alt = `call ${props.details.phone2}`
  // console.log("code is here")
  // console.log(person)
  return (

    
    <li>
      <h3>{person.fullName}</h3>
      <p className="details">Notes: {person.notes}</p>      

      {
         person.phone2 ===""
          ? <a href={phone1} className="callButton" alt={phone1Alt}>Call</a>
          : 
            <>
             <a href={phone1} className="callButton" alt={phone1Alt}>Call primary</a>
             <a href={phone2} className="callButton" alt={phone2Alt}>Call secondary</a>
            </>        
      }

      <h4>Availability Today</h4>
      <p className="details"> {todayAvailStart} to {todayAvailEnd}</p>
    </li>
  )
}

export default CurrentVols;

