import { configureStore } from '@reduxjs/toolkit';
import sortReducer from '../redux/sortSlice';
import genderReducer from '../redux/genderSlice'; 

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    gender: genderReducer,
  },
});
