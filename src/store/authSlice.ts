import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const fetchTokenLocalStorage = () => {
  let token = localStorage.getItem('token');
  if (token) {
    return JSON.parse(token);
  } else {
    return (token = '');
  }
};

const tokenInLocalStorage = (data: any) => {
  localStorage.setItem('token', JSON.stringify(data));
};

const initialState = {
  accessToken: fetchTokenLocalStorage(),
  userName: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      tokenInLocalStorage(state.accessToken);
    },
    addUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    clearTokenAndName: (state) => {
      state.accessToken = '';
      tokenInLocalStorage(state.accessToken);
      state.userName = '';
    }
  }
});

export const { addToken, addUserName, clearTokenAndName } = authSlice.actions;
export const getToken = (state: RootState) => state.auth.accessToken;
export const getUserName = (state: RootState) => state.auth.userName;
export default authSlice.reducer;
