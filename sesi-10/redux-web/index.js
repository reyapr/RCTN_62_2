
// initial State
const initialState = {
  counter: 0,
  title: 'learn redux'
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('trigger increment')
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case 'DECREMENT':
      console.log('trigger decrement')
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      console.log('trigger default value')
      return state
  }
}

// action
const actionIncrement = { type: 'INCREMENT', payload: 2 }
const actionDecrement = { type: 'DECREMENT' }


// dom
const counterEl = document.querySelector('#counter')
const plusEl = document.querySelector('#increment')
const minusEl = document.querySelector('#decrement')


// store
const store = Redux.createStore(reducer)

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
  counterEl.innerHTML = store.getState().counter
})

// triggering action
// addEventListener
plusEl.addEventListener('click', () => store.dispatch(actionIncrement))
minusEl.addEventListener('click', () => store.dispatch(actionDecrement))

