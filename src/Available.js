import Header from "./Header";

const Available = (props) => {

  const allVolsArray = props.list;

  return (
    <div className="wrapper">
      <section className="available">
          <h2>Currently available</h2>
            <ul className="allVols">
              {
                allVolsArray.map((person) => {
                  console.log("test")
                })
              }
            </ul>
      </section>
    </div>
  )
}

export default Available; 