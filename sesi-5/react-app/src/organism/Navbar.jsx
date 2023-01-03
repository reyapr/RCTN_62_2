import React from "react";
import SearchBar from "../molecules/SearchBar";

class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '30px',
          marginTop: '10px',
          padding: '10px',
          border: '1px solid',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <a href="test.com">Home</a> {' '}
          <a href="test.com">About Us</a>
        </div>
        
        <div>
          <SearchBar/>
        </div>
      </div>
    )
  }
}

export default Navbar