import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { ABOUT_PAGE, HOME_PAGE } from './constant/page';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={HOME_PAGE} element={<Home/>}/>
        <Route path={ABOUT_PAGE} element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
