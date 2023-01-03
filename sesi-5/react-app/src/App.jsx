import React from 'react';
import './App.css';
import Username from './components/User';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <>
        <Username/>
        <hr />
        <Counter/>
      </>
    )
  }
}

export default App;
