import { configureStore } from '@reduxjs/toolkit';
import sortReducer from '../redux/sortSlice';

export const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
});
