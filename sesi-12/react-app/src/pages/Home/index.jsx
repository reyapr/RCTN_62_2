import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Learn React</h1>
      <hr />
      <div style={{ width: '400px', height: '300px', backgroundColor: 'grey' }}>
        <h1>Learn Test on React</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, aliquam ipsam dignissimos inventore, soluta blanditiis sapiente neque nam commodi vero cumque debitis deserunt quaerat! Ipsum iure nemo ab non adipisci.</p>
        <div>
          <button role="btn-navigation" onClick={() => navigate('/users')}>Users List</button>
        </div>
      </div>
    </div>
  )
}

export default Home