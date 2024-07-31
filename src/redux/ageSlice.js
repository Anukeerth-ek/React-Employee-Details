import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    age: ''
}

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
        setAge: (state, action)=> {
            state.age = action.payload
        }
    }
})

export const {setAge} = ageSlice.actions;
export const selectAge = (state)=> state.age.age;
export default ageSlice.reducer