import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer({ item, buyItem }) {
  return (
    <div>
      <h2>item - {item}</h2>
      <button onClick={buyItem}>buy item</button>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

  return {
    item: itemState,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
