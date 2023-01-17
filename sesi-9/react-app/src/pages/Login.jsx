import { useLocation, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPath = location.state?.from?.pathname
  
  const handleLogin = () => {
    localStorage.setItem('token', 'login')
    navigate(fromPath, {replace: true})
  }
  
  return (
    <>
      <div>Click to Login</div>
      <button onClick={handleLogin}>Login</button>
    </>
    
  )
}

export default Login