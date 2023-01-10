import React from "react";

class Counter2 extends React.Component {
  
  shouldComponentUpdate(nextProps) {
    if (this.props.num != nextProps.num) {
      return true
    }
    return false
  }
  
  render() {
    console.log('%c render Counter2', 'color: #59AC8B')
    return (
      <div>
        <h3>{this.props.num}</h3>
        <button onClick={this.props.setNum}>+</button>
      </div>
    )
  }
}

export default Counter2