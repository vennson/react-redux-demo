import cakeReducer from './cake/cakeReducer'
import { combineReducers } from 'redux'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

export default rootReducer
