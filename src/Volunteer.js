const Volunteer = (props) => {

  const person = props.details; 
  const day = props.details.avail;

  const phone1 = `tel: ${props.details.phone1}`
  const phone2 = `tel: ${props.details.phone2}`
  const phone1Alt = `call ${props.details.phone1}`
  const phone2Alt = `call ${props.details.phone2}`

  return (
    <li>
      <h3>{person.fullName}</h3>
      <p className="details">Notes: {person.notes}</p>      

      {
        person.phone2 ===""
          ? <a href={phone1} className="callButton" alt={phone2Alt}>Call</a>
          : 
            <>
             <a href={phone1} className="callButton" alt={phone1Alt}>Call primary</a>
             <a href={phone2} className="callButton" alt={phone2Alt}>Call secondary</a>
            </>       
      }

      <h4>Availability</h4>
      <p className="details">Sun: {day.Sun.start} to {day.Sun.end}</p>
      <p className="details">Mon: {day.Mon.start} to {day.Mon.end}</p>
      <p className="details">Tue: {day.Tue.start} to {day.Tue.end}</p>
      <p className="details">Wed: {day.Wed.start} to {day.Wed.end}</p>
      <p className="details">Thu: {day.Thu.start} to {day.Thu.end}</p>
      <p className="details">Fri: {day.Fri.start} to {day.Fri.end}</p>
      <p className="details">Sat: {day.Sat.start} to {day.Sat.end}</p>
    </li>
  )
}

export default Volunteer;

