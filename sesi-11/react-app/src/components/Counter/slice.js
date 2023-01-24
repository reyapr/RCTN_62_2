import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    num: 0
  },
  reducers: {
    updateNum: (state, action) => {
      state.num += action.payload.value // -1, 1 or any number
    }
  }
})

export const { updateNum } = counterSlice.actions
export default counterSlice.reducer