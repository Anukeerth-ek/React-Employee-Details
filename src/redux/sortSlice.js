import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortOrder: 'asc',
  sortBy: 'id',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSortBy: (state, action) => {
        state.sortBy = action.payload;
      },
  },
});

export const { setSortOrder, setSortBy } = sortSlice.actions;
export const selectSortOrder = (state) => state.sort.sortOrder;
export const selectSortBy = (state) => state.sort.sortBy;
export default sortSlice.reducer;
