import { configureStore } from "@reduxjs/toolkit";
import counterFnReducer from '../components/CounterFn/slice'
import counterClReducer from '../components/Counter/slice'

export const store = configureStore({
  reducer: {
    counterFn: counterFnReducer,
    counterCl: counterClReducer
  }
})