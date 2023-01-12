import './styles.css'
import styled from 'styled-components'
import { useState } from 'react'
import Button from '@mui/material/Button'

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
      <Button 
        onClick={() => updateCounter(-1)}
        variant='outlined'
        color='error'
        classes={{ borderRadius: '10px'}}
      >-</Button> {' '}
      <Button 
        onClick={() => updateCounter(1)}
        variant='outlined'
        color='success'
      >+</Button>
    </div>
  )
}

export default Counter