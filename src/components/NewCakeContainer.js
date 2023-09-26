import { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, buyUnrelated } from '../redux'

function NewCakeContainer({ numOfCakes, buyCake, buyUnrelated }) {
  const [number, setNumber] = useState(1)

  return (
    <div>
      <h2>number of cakes: {numOfCakes}</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>buy {number} cakes</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buyCake: (number) => dispatch(buyCake(number )),
    buyUnrelated: () => dispatch(buyUnrelated()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
