import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: '',
  user: {}
}

const callLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if(email === 'test@gmail.com' && password === 'admin') {
        resolve({ email })
      } else {
        reject('Invalid Email and Password')
      }
      
    }, 1500);
  })
}

export const authLoginApi = createAsyncThunk('auth/login', async (user) => {
  try {
    const res = await callLoginApi(user.email, user.pass)
    return res.email
  } catch (err) {
    throw(err)
  }
}) 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLoginApi.pending, (state, action) => {
        state.isLoginPending = true
        state.isLoginSuccess = false
        state.errorMessage = ''
        state.user = {}
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        const email = action.payload
        state.isLoginPending = false
        state.isLoginSuccess = true
        state.user = { email }
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        state.isLoginPending = false
        state.errorMessage = action.error.message
      })
  }
})

export default authSlice.reducer