import { useParams } from "react-router-dom"

const UserDetails = () => {
  const params = useParams()
  return (
    <div>
      <h2>User Details</h2>
      <p>This is User {params.userId}</p>
    </div>
  )
}

export default UserDetails