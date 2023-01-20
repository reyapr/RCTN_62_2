import logo from './logo.svg';
import './App.css';
import CounterFn from './components/CounterFn';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Counter Fn</h1>
      <CounterFn/>
      <hr />
      <h1>Counter Class</h1>
      <Counter/>
      <hr />
    </div>
  );
}

export default App;
