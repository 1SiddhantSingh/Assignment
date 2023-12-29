// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
}

interface Detail {
  id: number;
  name: string;
}

interface AuthState {
  user: User | null;
  details: Detail[];
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  details: [
    { id: 1, name: 'Detail 1' },
    { id: 2, name: 'Detail 2' },
    // Add more initial details if needed
  ],
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      const { username, password } = action.payload;
      if (username === 'user' && password === 'password') {
        state.user = { username };
        state.error = null;
      } else if (username === 'user' && password !== 'password') {
        state.error = 'Incorrect password';
      } else {
        state.error = 'User does not exist';
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    signup: (state, action: PayloadAction<{ username: string; password: string }>) => {
      const { username } = action.payload;
      // Simulate signup logic (client-side)
      state.user = { username };
      state.error = null;
    },
    addDetail: (state, action: PayloadAction<Detail>) => {
      state.details.push(action.payload);
    },
    removeDetail: (state, action: PayloadAction<{ id: number }>) => {
      state.details = state.details.filter((detail) => detail.id !== action.payload.id);
    },
  },
});

export const { login, logout, signup, addDetail, removeDetail } = authSlice.actions;
export default authSlice.reducer;
