import { createStore } from 'redux'


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


// store
const store = createStore(reducer)

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})
// triggering action
store.dispatch(actionIncrement) // => counter + 1
store.dispatch(actionIncrement) // => counter + 1
store.dispatch(actionIncrement) // => counter + 1
store.dispatch(actionDecrement)
