const Available = (props) => {

  const allVolsArray = props.list;

  return (
    <div className="wrapper">
      <section className="available">
          <h2>Currently available</h2>
            <ul className="allVols">
              {
                allVolsArray.map((person) => {
                  console.log(person)
                })
              }
            </ul>
      </section>
    </div>
  )
}

export default Available; 