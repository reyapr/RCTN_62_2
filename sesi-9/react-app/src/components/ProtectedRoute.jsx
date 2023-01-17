import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = (props) => {
  let location = useLocation()
  
  if(!localStorage.getItem('token')) {
    return <Navigate to='/login' state={{ from: location }} />
  }
  
  return props.children
}

export default ProtectedRoute