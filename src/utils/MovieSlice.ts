import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState:{
        nowPlaying: null,
        trailerVideo : null
    },
    reducers : {
        addmovie :(state,action)=>{
        state.nowPlaying = action.payload;
        },
        addTrailer: (state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
})
export const {addmovie,addTrailer} = movieSlice.actions
export default movieSlice.reducer;