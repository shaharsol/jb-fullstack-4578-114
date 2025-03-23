import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface FeedState {
    posts: Post[],
    isNewContent: boolean
}

const initialState: FeedState = {
    posts: [],
    isNewContent: false
}

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
            state.isNewContent = false
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.push(action.payload)
        },
        setNewContent: (state, action: PayloadAction<boolean>) => {
            state.isNewContent = action.payload
        },

    }
})

export const { init, addComment, setNewContent } = feedSlice.actions

export default feedSlice.reducer
