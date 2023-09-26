import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  )
}
