import React from "react";
import Navbar from "../organism/Navbar";
import PageTemplate from "../templates/PageTemplate";

class Home extends React.Component {
  render() {
    return (
      <div>
        <PageTemplate>
          About Us
          
          <div>
            Banner
          </div>
          <div>
            {this.props.text}
          </div>
        </PageTemplate>
      </div>
    ) 
  }
}

export default Home