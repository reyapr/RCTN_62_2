import logo from './logo.svg';
import './App.css';
import TitleClass from './components/TitleC';
import TitleFn from './components/TitleFn';
import Counter from './components/Counter';

function Header() {
  
  return (
    <header>
      <h1>My First React App</h1>
    </header>
  )
}

function Content() {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nostrum quaerat dolor praesentium laudantium rerum sequi eveniet quas velit, repellendus ad repudiandae voluptatem! At, esse eaque non est ea fugiat.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p>&copy; My self - 2023</p>
    </div>
  )
}

function App() {
  /**
   * doesn't have:
   * - constructor
   * - extends from React.Component
   * - action, eg: setState -> for rerender
   */
  
  let counter = 0
  const add = () => {
    console.log('add')
    counter+=1
    console.log('counter_inside_add: ', counter)
  }
  
  // same case as like this
  // const method = () => {
  //   this.state.username = 'udin 11'
  // }
  
  console.log('counter: ', counter)
  return (
    <div className="App">
        {/* <div>
          <Header/>
          <hr />
          <Content/>
          <hr />
          <Footer/>
        </div>
        
        <hr />
        <TitleClass text="Render From Class Component"/>
        <hr />
        <TitleFn text="Render From Functional Component"/>
        <p>{counter}</p>
        <button onClick={add}>+</button>
        <hr /> */}
        <hr />
        <h3>Counter on Functional Component Using Hooks</h3>
        <Counter/>
    </div>
  );
}

export default App;
