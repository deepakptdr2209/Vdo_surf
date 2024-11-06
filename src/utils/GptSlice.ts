import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState :{
        isGpt : false,

    },
    reducers:{
        addToggle : (state)=>{
            state.isGpt = !state.isGpt
        }
    }
})
export const {addToggle} = gptSlice.actions
export default gptSlice.reducer;