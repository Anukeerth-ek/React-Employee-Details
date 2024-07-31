import { configureStore } from '@reduxjs/toolkit';
import sortReducer from '../redux/sortSlice';
import genderReducer from '../redux/genderSlice'; 
import ageReducer from '../redux/ageSlice'
import searchReducer from '../redux/searchEmployeeSlice'

export const store = configureStore({
  reducer: {
    sort: sortReducer,
    gender: genderReducer,
    age: ageReducer,
    search: searchReducer
  },
});
