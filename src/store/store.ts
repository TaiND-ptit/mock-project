import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import pageReducer from './paginationSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
// import searchReducer from "./searchSlice";
// import productReducer from "./productSlice";
// import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    pagination: pageReducer,
    cart: cartReducer,
    auth: authReducer
    // search: searchReducer
    // product: productReducer,
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
