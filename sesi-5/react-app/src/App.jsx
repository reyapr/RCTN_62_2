import React from 'react';
import './App.css';
import Username from './components/User';
import Counter from './components/Counter';
import Home from './page/Home';
import AboutUs from './page/AboutUs';

class App extends React.Component {
  render() {
    return (
      <>
        <Home/>
        <hr />
        <AboutUs/>
        <hr />
        <Username/>
        <hr />
        <Counter/>
      </>
    )
  }
}

export default App;
