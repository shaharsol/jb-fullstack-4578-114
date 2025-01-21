import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface FeedState {
    posts: Post[]
}

const initialState: FeedState = {
    posts: []
}

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.push(action.payload)
        }
    }
})

export const { init, addComment } = feedSlice.actions

export default feedSlice.reducer
