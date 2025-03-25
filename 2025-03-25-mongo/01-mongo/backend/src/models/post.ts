import mongoose from "../db/mongoose"

interface PostComment {
    body: string,
    userId: string,
    createdAt: Date
}

interface Post {
    id: string,
    title: string,
    body: string,
    userId: string,
    createdAt: Date,
    comments: PostComment[]
}

const CommentSchema = new mongoose.Schema<PostComment>({
    body: String,
    userId: String,
    createdAt: Date
})

const PostSchema = new mongoose.Schema<Post>({
    title: String,
    body: String,
    userId: String,
    createdAt: Date,
    comments: [CommentSchema]
})

export const PostModel = mongoose.model<Post>('Post', PostSchema, 'posts')

