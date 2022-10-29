const CurrentVols = (props) => {

  const person = props.details; 
  const day = props.details.avail;
  const today = props.today;
  const todayAvailStart = props.details.avail[today].start;
  const todayAvailEnd = props.details.avail[today].end;
  const phone1 = props.details.phone1
  const phone2 = props.details.phone2

  
  return (
    <li>
      <h3>{person.fullName}</h3>
      <p className="details">Notes: {person.notes}</p>      

      {
        person.phone2 ===""
          ? <a href={phone1} className="callButton" alt="Call {props.details.phone1}">Call</a>
          : 
            <>
             <a href={phone1} className="callButton" alt="Call {props.details.phone1}">Call primary</a>
             <a href={phone2} className="callButton" alt="Call {props.details.phone2}">Call secondary</a>
            </>       
      }

      <h4>Availability Today</h4>
      <p className="details"> {todayAvailStart} to {todayAvailEnd}</p>
    </li>
  )
}

export default CurrentVols;

