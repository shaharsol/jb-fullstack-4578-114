import { configureStore } from "@reduxjs/toolkit";
import { followingSlice } from "./followingSlice";
import { profileSlice } from "./profileSlice";
import { feedSlice } from "./feedSlice";

const store = configureStore({
    reducer: { // i.e. slices
        following: followingSlice.reducer, // i.e a single slice
        profile: profileSlice.reducer,
        feed: feedSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch