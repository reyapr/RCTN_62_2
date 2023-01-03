import React from "react";

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
    console.log('render')
    return (
      <div className="App">
        <div>
          <p>{this.getUsername()}</p>
        </div>
        <button onClick={this.setUsername}>Set Username</button>
      </div>
    );
  }
}

export default Username