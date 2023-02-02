import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setUsers(res)
      })
  })
  
  return (
    <div>
      <h1>Learn React</h1>
      <hr />
      <button style={{ 
          backgroundColor: 'green', 
          width: '100px', 
          borderRadius: '10px',
          color: 'white'
        }}
        onClick={() => navigate('/')}
        role="back-to-home-btn"
      >
        Back to Home
      </button>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr role={`user-${user.id}`} key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users