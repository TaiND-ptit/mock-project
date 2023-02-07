import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface paginationState {
  pageNumber: number;
}

const initialState: paginationState = {
  pageNumber: 1
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.pageNumber = action.payload;
    }
  }
});

export const { changePage } = paginationSlice.actions;
export default paginationSlice.reducer;
