import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0
}
export const counterSlice = createSlice({
  name: 'counterFn',
  initialState, 
  reducers: {
    increment: (state) => {
      state.num += 1
    },
    decrement: (state) => {
      state.num -= 1
    },
    incrementByPayload: (state, payload) => {
      state.num += payload.value
    }
  }
})

export const { increment, decrement, incrementByPayload } = counterSlice.actions

export default counterSlice.reducer