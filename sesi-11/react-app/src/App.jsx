import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';
import Auth from './components/Auth';

function App() {
  
  //fetch -> trigger action
  
  // componentdidmount -> fetchUser()
  return (
    <div >
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <Counter/>
      <hr />
      <Users/>
      <hr />
      <Auth/>
    </div>
  );
}

export default App;
