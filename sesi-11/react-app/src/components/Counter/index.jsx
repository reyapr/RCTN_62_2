import { useDispatch, useSelector } from "react-redux"
import { updateNum } from './slice'

const Counter = () => {
  const selector = useSelector((state) => ({
    num: state.counter.num
  }))
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{selector.num}</h2>
      <div>
        <button onClick={() => dispatch(updateNum({ value: 10 }))}>+</button> {' '}
        <button onClick={() => dispatch(updateNum({ value: -10 }))}>-</button>
      </div>
    </div>
  )
}

export default Counter