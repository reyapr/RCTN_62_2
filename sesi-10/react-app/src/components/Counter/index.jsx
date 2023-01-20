import React from "react";
import { connect } from "react-redux";
import { decrementCl, incrementCl } from "./slice";

class Counter extends React.Component {
  render() {
    console.log(this.props, 'this props')
    return (
      <div>
        <h2>{this.props.num}</h2>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  return ({
    ...state.counterCl
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCl()),
    decrement: () => dispatch(decrementCl())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)