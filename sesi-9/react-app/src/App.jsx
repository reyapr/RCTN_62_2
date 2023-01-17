import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { ABOUT_COMPANY_PAGE, ABOUT_ME_PAGE, ABOUT_PAGE, HOME_PAGE } from './constant/page';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Members from './pages/Members';
import Member from './pages/Member';
import Items from './pages/Items';
import Item from './pages/Item';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={HOME_PAGE} element={<Home/>}/>
        <Route path={ABOUT_PAGE} element={<About/>}>
          <Route path={ABOUT_COMPANY_PAGE} element={<AboutCompany/>}/>
          <Route path={ABOUT_ME_PAGE} element={<AboutMe/>}/>
        </Route>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<UserDetails/>}/>
        <Route path='/members' element={<Members/>}>
          <Route path=':memberId' element={<Member/>}/>
        </Route>
        <Route path='/items' element={<Items/>}>
          <Route path=':itemId' element={<Item/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
