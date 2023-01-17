import { Link, useNavigate } from "react-router-dom"
import { ABOUT_PAGE, HOME_PAGE } from "../constant/page"

const NavBar = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(HOME_PAGE)
  }
  return (
    <nav style={{
      borderBottom: '1px solid black',
      paddingBottom: '5px'
    }}>
      <Link style={{ textDecoration: 'none'}} to={HOME_PAGE}>Home</Link> | {' '}
      <Link style={{ textDecoration: 'none'}} to={ABOUT_PAGE}>About</Link> | {' '}
      <Link style={{ textDecoration: 'none'}} to={'/users'}>Users</Link> | {' '}
      <Link style={{ textDecoration: 'none'}} to={'/members'}>Members</Link> | {' '}
      <Link style={{ textDecoration: 'none'}} to={'/items'}>Items</Link>
      {
        localStorage.getItem('token') &&
          <button onClick={handleLogout}>
            Logout
          </button>
      }
      {/* <a href="/">Home</a> | <a href="/about">About</a> */}
    </nav>
  )  
}

export default NavBar