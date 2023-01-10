import React from 'react';
import axios from 'axios'

class Users extends React.Component {
  constructor() {
    super()
    console.log('constructor called')
    this.state = {
      users: [],
      user: {},
      userId: 0
    }
  }
  
  setUserId = (id) => {
    this.setState({
      userId: id
    })
  }
  
  // shouldComponentUpdate(_, nextState) {
  //   const isUsersChange = nextState.users.length != this.state.users.length
  //   const isUserChange = nextState.user.id != this.state.user.id
  //   if (isUsersChange || isUserChange) {
  //     return true
  //   }
    
  //   return false
  // }
  
  componentWillUnmount() {
    console.log('unmount')
    localStorage.removeItem('user')
  }
  
  
  componentDidUpdate(_, prevState) {
    console.log('did update')
    if(prevState.userId !== this.state.userId) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.userId}`)
      .then(res => {
        this.setState({
          user: res.data
        })
        localStorage.setItem('user', JSON.stringify(res.data))
      })
    }
  }
  
  componentDidMount() {
    // fetch data from an api
    console.log(this.state.users, 'users did mount')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }
  
  render() {
    console.log('%c users', 'color: #9BAC59', this.state)
    console.log(`%c render Users`, 'color: #9BAC59')
    const user = this.state.user
    // const test = this.state.userId.includes('test')
    return (
      <>
        {
          this.state.users.length === 0 ?
          <>...Loading</>
          :
          <div style={{ display: 'flex' }}>
            <div style={
              { width: '50%', borderRight: '1px solid'}}
            >
              <div>Name: {user.name}</div>
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
            <div>
              {
              //  [
              //   <div> <b>Name:</b> Udin </div>,
              //   <div> <b>Name:</b> Bambang </div>
              //  ]
                this.state.users.map(user => {
                  return (
                    <div key={user.name}>
                      <b>Name:</b> {user.name} {' '}
                      <button onClick={() => this.setUserId(user.id)}>Get Details</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
      </>
    )
  }
}

export default Users