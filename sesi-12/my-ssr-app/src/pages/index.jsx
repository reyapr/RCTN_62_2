import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  
  return (
    <div style={{marginLeft: '300px', marginRight: '300px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>ID</div>
        <div>Name</div>
        <div>Email</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        {
          users.map(user => {
            return (
              <div key={user.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


