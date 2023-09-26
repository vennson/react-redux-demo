import { BUY_CAKE, BUY_UNRELATED } from './cakeTypes'

const initialState = {
  numOfCakes: 10,
  unrelated: 100,
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      }
    case BUY_UNRELATED:
      return {
        ...state,
        unrelated: state.unrelated - 1,
      } 
    default:
      return state
  }
}

export default cakeReducer
