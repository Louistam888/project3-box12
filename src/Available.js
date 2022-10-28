const Available = (props) => {

  const allVolsArray = props.list;

  return (
    <section className="available">
      <div className="wrapper">
        <h2>Currently available</h2>
          <ul className="allVols">
            {
              allVolsArray.map((person) => {
                console.log(person)
              })
            }
          </ul>
      </div>
    </section>
  )
}

export default Available; 