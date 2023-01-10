import React from "react";

class Users extends React.Component {
  constructor() {
    super()
    console.log('constructor called')
    this.state = {
      users: []
    }
    
    this.setState({
      users: 'test'
    })
  }
  
  componentDidMount() {
    // fetch data from an api
    console.log(this.state.users, 'did mount')
    const users = [
      {name: 'udin'},
      {name: 'bambang'}
    ] 
    
    setTimeout(() => {
      console.log('try to set the user value')
      this.setState({ users })
    }, 2000);
  }
  
  render() {
    console.log('render called')
    return (
      <>
        {
          this.state.users.length === 0 ?
          <>...Loading</>
          :
          <div>
            {
            //  [
            //   <div> <b>Name:</b> Udin </div>,
            //   <div> <b>Name:</b> Bambang </div>
            //  ]
             this.state.users.map(user => {
              return (
                <div key={user.name}>
                  <b>Name:</b> {user.name}
                </div>
              )
            })
            }
          </div>
        }
      </>
    )
  }
}

export default Users