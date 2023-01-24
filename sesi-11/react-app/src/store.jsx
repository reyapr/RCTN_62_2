import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterSlice from './components/Counter/slice'
import usersSlice from './components/Users/slice'
import authSlice from './components/Auth/slice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    auth: authSlice
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
  devTools: true
})