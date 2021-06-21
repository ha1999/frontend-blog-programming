import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../api';
import { RootState } from '../rootReducer';

type InitialState = {
    name: string,
    listUsers: User[]
}
const initialState: InitialState = {
  name: '',
  listUsers: []
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
    setListUsers(state, action: PayloadAction<User[]>){
      state.listUsers = action.payload
    }
  },
});

export const { changeName, clearName, setListUsers } = UsersSlice.actions;

export const getName = (state: RootState) => state.users.name;

export default UsersSlice.reducer;
