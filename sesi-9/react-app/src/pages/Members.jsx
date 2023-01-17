import { Link, Outlet } from "react-router-dom"

const Members = () => {
  return (
    <div>
      <h1>Members Page</h1>
      <p>Select a member to be shown</p>
      <Link to="John Doe">John Doe</Link> <br />
      <Link to="Jahn Dae">Jahn Dae</Link>
      <Outlet/>
    </div>    
  )
}

export default Members