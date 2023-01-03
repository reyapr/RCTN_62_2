import React from "react";

class Counter extends React.Component {
  constructor() {
    super() 
    this.state = {
      counter: 0
    }
  }
  
  plus = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  minus = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  
  updateCount = (num) => {
    this.setState({
      counter: this.state.counter + num
    })
  }
  
  render() {
    return (
      <div className="App">
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.plus()} >-</button>
          <span>{"  "}</span>
          <button onClick={this.updateCount(2)}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter