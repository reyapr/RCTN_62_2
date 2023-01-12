import './styles.css'
import styled from 'styled-components'
import { useState } from 'react'

const blue = 'violet'
const CounterMessageT = styled.div`
 background-color: ${(props) => {
  return props.bgColor
 }};
 padding: 10px 0px;
`

const CounterMessageO = styled.div((props) => ({
  backgroundColor: props.bgColor,
  padding: '10px 0px'
}))

const Counter = () => {
  const [counter, setCounter] = useState(0)
  
  const updateCounter = (n) => {
    setCounter(counter + n)
  }
  
  let counterMessageBgColor = 'lightgreen'
  if(counter > 10) {
    counterMessageBgColor = 'red'
  } else if (counter < 0) {
    counterMessageBgColor = 'yellow'
  }
  
  return (
    <div>
      <CounterMessageO bgColor={counterMessageBgColor}>
        My Counter
      </CounterMessageO>
      <div>{counter}</div>
      <button onClick={() => updateCounter(-1)} >-</button> {' '}
      <button onClick={() => updateCounter(1)}>+</button>
    </div>
  )
}

export default Counter