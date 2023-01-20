import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  num: 0
}

const counterSlice = createSlice({
  name: 'counterCl',
  initialState,
  reducers: {
    incrementCl: (state) => {
      state.num += 1
    },
    decrementCl: state => {
      state.num -= 1
    }
  }
})

export const { incrementCl, decrementCl } = counterSlice.actions

export default counterSlice.reducer
