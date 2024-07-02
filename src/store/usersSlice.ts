// src/features/example/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../views/Users/types';

export interface UsersState {
  data: User[];
  loading: boolean;
  actionMade: boolean;
  userId: number | undefined;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  actionMade: false,
  userId: undefined
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
      state.loading = false;
      state.userId = undefined;
    },
    setUser(state, action: PayloadAction<number>) {
      state.userId = action.payload;
    },
  }
});

export const { 
    setData, 
    setLoading,
    setActionMade,
    setUser
} = usersSlice.actions;

export default usersSlice.reducer;
