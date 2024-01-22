import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  signUpThunk,
} from './userThunk';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleIfFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handleIfPending)
      .addCase(signUpThunk.rejected, handleIfReject)
      .addCase(signUpThunk.fulfilled, handleIfFulfilled)
      .addCase(loginThunk.pending, handleIfPending)
      .addCase(loginThunk.rejected, handleIfReject)
      .addCase(loginThunk.fulfilled, handleIfFulfilled)
      .addCase(logoutThunk.pending, handleIfPending)
      .addCase(logoutThunk.rejected, handleIfReject)
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, handleIfPending)
      .addCase(refreshUserThunk.rejected, handleIfReject)
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;