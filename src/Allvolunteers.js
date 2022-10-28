
import Volunteer from "./Volunteer";

const Allvolunteers = (props) => {
  const allVolsArray = props.list;

  return (
    <div className="wrapper">
      <section className="everyone">
      
          <h2>All volunteers</h2>
            <ul className="allVols">
              {
                allVolsArray.map((person) => {
                  return <Volunteer details ={person} />
                })
              }
            </ul>
      
    </section>
    </div>
  )
}

export default Allvolunteers;