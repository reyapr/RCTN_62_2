import React from "react";

class Counter1 extends React.Component {
  render() {
    console.log('%c render Counter1', 'color: #F08484')
    return (
      <div>
        <h3>{this.props.num}</h3>
        <button onClick={this.props.setNum}>+</button>
      </div>
    )
  }
}

export default Counter1