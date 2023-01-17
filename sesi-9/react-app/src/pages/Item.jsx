import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import items from '../constant/items'
import axios from 'axios'
import { VALORANT_WEAPONS_URL } from "../constant/api"

const Item = () => { 
  const params = useParams()
  const [weapon, setWeapon] = useState({})
  
  
  useEffect(() => {
    console.log(params.itemId, 'cek')
    axios.get(`${VALORANT_WEAPONS_URL}/${params.itemId}`)
      .then(res => {
        setWeapon(res.data.data)
      })
  }, [params.itemId])
  
  console.log(weapon,'weapon')
  
  return (
    <div>
      <h2>{weapon.displayName}</h2>
      <p>Category: {weapon.category?.split('::')[1]}</p>
      <img style={{ width: '250px' }} src={weapon.displayIcon} alt="" />
    </div>
  )
}

export default Item