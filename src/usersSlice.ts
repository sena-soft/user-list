// src/features/example/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './views/Users/types';

export interface UsersState {
  data: User[];
  loading: boolean;
}

const initialState: UsersState = {
  data: [],
  loading: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<User[]>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  }
});

export const { 
    setData, 
    setLoading 
} = usersSlice.actions;

export default usersSlice.reducer;
