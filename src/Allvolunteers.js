
import Volunteer from "./Volunteer";

const Allvolunteers = (props) => {
  const allVolsArray = props.list;

  return (
    <section className="everyone">
      <div className="wrapper">
        <h2>All volunteers</h2>
          <ul className="allVols">
            {
              allVolsArray.map((person) => {
                return <Volunteer details ={person} />
              })
            }
          </ul>
      </div>
    </section>
  )
}

export default Allvolunteers;