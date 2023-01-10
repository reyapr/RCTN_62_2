import React from 'react';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Users from './components/Users';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0
    }
  }
  
  setNum1 = () => {
    this.setState({
      num1: this.state.num1 + 1
    })
  }
  
  setNum2 = () => {
    this.setState({
      num2: this.state.num2 + 1
    })
  }
  
  componentDidMount() {
    console.log('app did mount')
  }
  
  render() {
    console.log(`%c
    num1: ${this.state.num1} 
    num2: ${this.state.num2}
    render App`, 'color: #7759AC')
    return (
      <div className="App">
        <Counter1 
          num={this.state.num1} 
          setNum={this.setNum1}
        />
        <Counter2
          num={this.state.num2}
          setNum={this.setNum2}
        />
        <hr />
        <Users/>
      </div>
    );
  }
}

export default App;
