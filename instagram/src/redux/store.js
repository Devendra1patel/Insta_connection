import { configureStore } from '@reduxjs/toolkit';
import  userReducer from './slices/user.js';

const store = configureStore({
  reducer: {
    userInfo:userReducer ,
  },
})
export default store;
