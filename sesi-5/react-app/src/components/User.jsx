import React from "react";
import ErrorMessage from './ErrorMessage'

class Username extends React.Component {
  constructor() {
    super()
    this.state = {
      username: 'udin-10'
    }
    this.setUsername = this.setUsername.bind(this)
  }
  
  getUsername() {
    return this.state.username + ' from method'
  }
  
  setUsername() {
    console.log('before: ', this)
    console.log('trigger from button')
    this.setState({
      username: 'udin-11'
    })
    console.log('after:', this)
  }
  
  
  render() {
    const isUdinInclude11 = this.state.username.includes('11')
    return (
      <div className="App">
        <div>
          <p>{this.getUsername()}</p>
        </div>
        <button onClick={this.setUsername}>Set Username</button>
        {
          isUdinInclude11 && 
            <ErrorMessage
              errMessage={"udin include 11"}
              errColor="red"
            />
        }
      </div>
    );
  }
}

export default Username