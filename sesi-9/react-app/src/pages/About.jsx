import { Outlet } from "react-router-dom"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is About</p> 
      <Outlet/>
      
    </div>
  )
}

export default About