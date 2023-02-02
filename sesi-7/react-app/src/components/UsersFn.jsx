import { useEffect, useState } from "react"
import User from "./UserFn"
import axios from 'axios'

const UsersFn = () => {
  const [state, setState] = useState({
    users: [],
    user: {},
    userId: 0
  })
  
  const setUserId = (id) => 
    setState({ ...state, userId: id })
    
  const didMount = () => {
    console.log('fn did mount')
    const unmount = () => {
      console.log('fn unmount')
      localStorage.removeItem('user')
    }
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setState({
          ...state,
          users: res.data
        })
      })
      
    return unmount
  }
  
  const didUpdate = () => {
    console.log('fn did update')
    axios.get(`https://jsonplaceholder.typicode.com/users/${state.userId}`)
      .then(res => {
        setState({
          ...state,
          user: res.data
        })
      })
  }
  
  useEffect(didMount, [])
  useEffect(didUpdate, [state.userId])
  
  return (
    <>
      {
        state.users.length === 0 ?
        <>...Loading</>
        :
        <div style={{ display: 'flex' }}>
          <div style={
            { width: '50%', borderRight: '1px solid'}}
          >
            <User user={state.user}/>
          </div>
          <div>
            {
            //  [
            //   <div> <b>Name:</b> Udin </div>,
            //   <div> <b>Name:</b> Bambang </div>
            //  ]
              state.users.map(user => {
                return (
                  <div key={user.name}>
                    <b>Name:</b> {user.name} {' '}
                    <button onClick={() => setUserId(user.id)}>Get Details</button>
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

export default UsersFn