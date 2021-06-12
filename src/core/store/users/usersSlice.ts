import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

type InitialState = {
    name: string
}
const initialState: InitialState = {
  name: '',
};

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    clearName(state) {
      state.name = '';
    },
  },
});

export const { changeName, clearName } = UsersSlice.actions;

export const getName = (state: RootState) => state.users.name;

export default UsersSlice.reducer;
