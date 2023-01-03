import React from "react";
import ErrorMessage from "../ErrorMessage";

class Counter extends React.Component {
  constructor() {
    super() 
    this.state = {
      counter: 0,
      showErrMessage: true
    }
  }
  
  // plus = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   })
  // }
  
  // minus = () => {
  //   this.setState({
  //     counter: this.state.counter - 1
  //   })
  // }
  
  updateCount = (num) => {
    this.setState({
      counter: this.state.counter + num
    })
  }
  
  showErrMessage = () => {
    console.log('test')
    this.setState({
      showErrMessage: !this.state.showErrMessage
    })
  }
  
  
  render() {
    const isCounterAbove10 = this.state.counter > 10 // true or false
    
    return (
      <div className="App">
        <div>{this.state.counter}</div>
        <div>
          <button onClick={() => this.updateCount(-1)} >-</button>
          <span>{"  "}</span>
          <button onClick={() => this.updateCount(2)}>+</button>
          { isCounterAbove10 && 
            <ErrorMessage 
              errMessage={"counter is above 10"} 
              errColor="green"
            /> 
          }
        </div>
      </div>
    )
  }
}

export default Counter