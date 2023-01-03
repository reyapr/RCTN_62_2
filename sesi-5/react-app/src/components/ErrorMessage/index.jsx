import React from "react";
import PropTypes from 'prop-types'

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
          {this.props.errMessage.slice(0, 8) + '...'}
        </div>
      </>
    )
  }
}

ErrorCounter.propTypes = {
  errMessage: PropTypes.string,
  showFn: PropTypes.func.isRequired
}

export default ErrorCounter