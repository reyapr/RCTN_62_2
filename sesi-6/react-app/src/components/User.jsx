import React from "react";


class User extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'udin',
      age: 25,
      email: 'udin@sedunia.com'
    }
  }
  
  updatePersonName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return (
      <>
        <div>Name: {this.state.name}</div>
        <div>Age: {this.state.age}</div>
        <div>Email: {this.state.email}</div>
        <br />
        <div>
          Name: <input onChange={this.updatePersonName} type="text" />
        </div>
      </>
    )
  }
}

export default User