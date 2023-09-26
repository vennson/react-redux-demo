import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer({ numOfIceCreams, buyIceCream, unrelated }) {
  return (
    <div>
      <h2>number of ice creams: {numOfIceCreams}</h2>
      <h2>number of unrelated: {unrelated}</h2>
      <button onClick={buyIceCream}>buy ice cream</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
    unrelated: state.cake.unrelated,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
