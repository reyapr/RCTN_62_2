import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import items from '../constant/items'
import axios from 'axios'
import { VALORANT_WEAPONS_URL } from '../constant/api'

const Items = () => {
  const [weapons, setWeapons] = useState([])
  const navigate = useNavigate()
  console.log(weapons,'weapons')
  
  useEffect(() => {
    axios.get(VALORANT_WEAPONS_URL)
      .then(res => {
        setWeapons(res.data.data.slice(0,3))
        /**
         * {
         *  data: {
         *    data: []
         *  }
         * }
         */
      })
  }, [])
  
  return (
    <div>
      <h1>Items Page</h1>
      <p>Select an item to be shown</p>
      <ul>
        {weapons.map(item => {
          return (
            <li key={item.uuid}>
              <div>{item.displayName}</div>
              <div>
                <button onClick={() => navigate(`${item.uuid}`)}>Show Details</button>
              </div>
            </li>
          )
        })}
      </ul>
      <Outlet/>
    </div>
  )
}

export default Items