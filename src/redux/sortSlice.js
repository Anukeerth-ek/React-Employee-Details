import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortOrder: 'asc', // Default to ascending
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setSortOrder } = sortSlice.actions;
export const selectSortOrder = (state) => state.sort.sortOrder;
export default sortSlice.reducer;
