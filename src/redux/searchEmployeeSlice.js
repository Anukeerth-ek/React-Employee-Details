import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    search: ''
}

const searchEmployeeSlice = createSlice({
    name: "searchEmployeeName",
    initialState,
    reducers: {
        setSearch:(state, action)=> {
            state.search = action.payload;
        }
    }
})

export const {setSearch} = searchEmployeeSlice.actions;
export const setSearchedValue = (state)=> state.search.search;
export default searchEmployeeSlice.reducer