import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import TestLayout from './components/TestLayout';
import User from './components/User';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <User/>
      <Counter/>
    </div>
    <TestLayout/>
    </>
  );
}

export default App;
