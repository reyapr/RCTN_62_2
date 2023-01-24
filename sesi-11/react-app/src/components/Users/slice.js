import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  data: [],
  isLoading: false
}


//fetchUsers()
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  return res.data
    
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true
        state.data = []
      })
  }
})

export default usersSlice.reducer