import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByPayload } from './slice'

const CounterFn = () => {
  const state = useSelector((state) => state.counterFn)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h2>{state.num}</h2>
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default CounterFn