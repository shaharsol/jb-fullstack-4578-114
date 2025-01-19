import { configureStore } from "@reduxjs/toolkit";
import { followingSlice } from "./followingSlice";

const store = configureStore({
    reducer: { // i.e. slices
        following: followingSlice.reducer // i.e a single slice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch