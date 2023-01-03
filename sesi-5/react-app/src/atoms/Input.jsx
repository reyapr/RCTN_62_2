import React from "react";

class MyInput extends React.Component {
  render() {
    return (
      <input 
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      />
    )
  }
}

export default MyInput