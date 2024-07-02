// src/features/example/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../views/Users/types';

export interface UsersState {
  data: User[];
  loading: boolean;
  actionMade: boolean
}

const initialState: UsersState = {
  data: [],
  loading: false,
  actionMade: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<User[]>) {
      state.data = action.payload;
      state.actionMade = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setActionMade(state, action: PayloadAction<boolean>) {
      state.actionMade = action.payload;
    },
  }
});

export const { 
    setData, 
    setLoading,
    setActionMade
} = usersSlice.actions;

export default usersSlice.reducer;
