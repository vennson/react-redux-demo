import { connect } from 'react-redux'
import { buyCake, buyUnrelated } from '../redux'

function CakeContainer({ numOfCakes, buyCake, buyUnrelated }) {
  return (
    <div>
      <h2>number of cakes: {numOfCakes}</h2>
      <button onClick={buyCake}>buy cake</button>
      <button onClick={buyUnrelated}>buy unrelated</button>
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
    buyCake: () => dispatch(buyCake()),
    buyUnrelated: () => dispatch(buyUnrelated()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
