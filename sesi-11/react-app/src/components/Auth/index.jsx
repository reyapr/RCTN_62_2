import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authLoginApi } from "./slice";

const Auth = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => ({
    ...state.auth
  }))
  
  const [authInput, setAuthInput] = useState({
    email: '',
    pass: ''
  })
  
  const handleChange = (e) => {
    setAuthInput({
      ...authInput,
      [e.target.name]: e.target.value
    })
  }
  
  const login = () => {
    dispatch(authLoginApi(authInput))
  }
  
  return (
    <div>
      <div>
        Email: 
        <input 
          name="email"
          onChange={handleChange} 
          value={authInput.email} 
          type="text" 
        />
      </div>
      <br />
      <div>
        Password: 
        <input
          name="pass"
          value={authInput.password} 
          type="password" 
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={login}>Submit</button>
      </div>
      <div>
        {
          selector.isLoginPending && 
            <div style={{ color: 'goldenrod'}} >...Loading</div>
        }
        {
          selector.isLoginSuccess && 
            <div style={{ color: 'green' }}>Success to login</div>
        }
        {
          selector.errorMessage &&
            <div style={{ color: 'red'}} >{selector.errorMessage}</div>
        }
      </div>
    </div>
  )
  
}

export default Auth