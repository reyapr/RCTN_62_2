import React from "react";
import Navbar from "../organism/Navbar";

class HomeTemplate extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{
          padding: '25px',
          backgroundColor: 'beige',
          border: '1px solid grey'
        }}>
          {this.props.children}
        </div>
      </div>
    ) 
  }
}

export default HomeTemplate