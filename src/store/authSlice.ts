import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface authState {
  accessToken: string;
  userName: string;
}

const initialState: authState = {
  accessToken: '',
  userName: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    addUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    clearTokenAndName: (state) => {
      state.accessToken = '';
      state.userName = '';
    }
  }
});

export const { addToken,addUserName, clearTokenAndName } = authSlice.actions;
export const getToken = (state: RootState) => state.auth.accessToken;
export const getUserName = (state: RootState) => state.auth.userName;
export default authSlice.reducer;
