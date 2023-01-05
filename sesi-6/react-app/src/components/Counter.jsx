import { useState } from "react"


const Counter = () => {
  const [state, setState] = useState(0) // ==> [state, setState]
  const [person, setPerson] = useState({
    name: 'udin',
    age: 25,
    email: 'udin@sedunia.com'
  })
  
  const updatePerson = (e) => {
    console.log('fieldName: ', e.target.name)
    console.log('value:', e.target.value)
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }
  
  const updateCounter = (num) => {
    // setState((prevState) => prevState + 1)
    setState(state + num)
  }
  
  // console.log('person:', person)
  
  return (
    <>
      <p>{state}</p>
      <div>
        <button onClick={() => updateCounter(-1)}>-</button>
        <button onClick={() => updateCounter(1)}>+</button>
      </div>
      <hr />
      <div>
        <div>
          <h3>Person</h3>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Email: {person.email}</p>
        </div>
        <div>
          <h3>Update Person</h3>
          <div style={{ margin: '10px' }}>
            Name: <input name="name" onChange={updatePerson} type="text" />
          </div>
          <div style={{ margin: '10px' }}>
            Age: <input name="age" onChange={updatePerson} type="text" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
