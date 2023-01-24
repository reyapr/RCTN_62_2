import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./slice"

const Users = () => {
  const selector = useSelector((state) => ({
    users: state.users.data,
    isLoading: state.users.isLoading
  }))
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  
  if(selector.isLoading) {
    return <div>...Loading</div>
  }
  
  return (
    <div>
      <ul>
        {
          selector.users.map(user => (
            <li>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users