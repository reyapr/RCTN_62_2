import React from "react";

class ErrorCounter extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            color: this.props.errColor,
            marginTop: '10px'
          }}
        >
          {this.props.errMessage}
        </div>
      </>
    )
  }
}

export default ErrorCounter