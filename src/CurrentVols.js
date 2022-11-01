//THIS COMPONENT IMPORTS CURRENTLY AVAILABLE VOLUNTEERS FROM AVAILABLE.JS AND RENDERS INFORMATION FOR EACH VOLUNTEER

const CurrentVols = (props) => {

  //IMPORTED VOLUNTEER DETAILS 
  const person = props.details; 
  const today = props.today;
  const todayAvailStart = props.details.avail[today].start;
  const todayAvailEnd = props.details.avail[today].end;
  const phone1 = `tel: ${props.details.phone1}`
  const phone2 = `tel: ${props.details.phone2}`
  const phone1Alt = `call ${props.details.phone1}`
  const phone2Alt = `call ${props.details.phone2}`

  return (

    <li className="vol">
      <h3>{person.fullName}</h3>
      { `${person.notes}` === ""
      ? <p className="details">Notes: N/A</p>
      : <p className="details">Notes: {person.notes}</p>  
      }      

    <div className="callButtonContainer">
      {
         !person.phone2 
          ? <a href={phone1} className="callButton" alt={phone1Alt}>Call</a>
          : 
            <>
             <a href={phone1} className="callButton" alt={phone1Alt}>Call primary</a>
             <a href={phone2} className="callButton" alt={phone2Alt}>Call secondary</a>
            </>        
      }
    </div>

      <h4>Availability Today</h4>
      
      { `${todayAvailStart}` === "00:00" && `${todayAvailEnd}` === "23:59"
        ? <p className="timeDetails">All day</p>
        : <p className="timeDetails"> {todayAvailStart} to {todayAvailEnd}</p>
      }

    </li>
  )
}

export default CurrentVols;

