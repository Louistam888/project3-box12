
const Available = (props) => {

  const allVolsArray = props.list;
  let currentDay = new Date(props.time);
  let day = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", weekday: "short"})
  let hour = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", hour12:false, hour: "numeric"});
  let minute = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", minute: "2-digit"})
  let second = currentDay.toLocaleString("en-CA", {timeZone: "America/Toronto", second: "2-digit"})


  return (
    <div className="wrapper">
      <section className="available">
          <h2>Currently available</h2>
            <ul className="allVols">
              {
                allVolsArray.map((person) => {
                 
                })
              }
            </ul>
      </section>
    </div>
  )
}

export default Available; 