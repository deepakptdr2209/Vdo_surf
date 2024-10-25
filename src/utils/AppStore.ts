import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./UserSlice";
import movieReducer from './MovieSlice';
const AppStore = configureStore({
    reducer:{
        user : userReducer,
        movies : movieReducer
    }
})
export default AppStore;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof AppStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof AppStore.dispatch