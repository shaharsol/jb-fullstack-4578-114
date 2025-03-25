import mongoose from "../db/mongoose"

interface PostComment {
    body: string,
    userId: string,
    createdAt: Date
}

interface Post {
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
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
})

export const PostModel = mongoose.model<Post>('Post', PostSchema, 'posts')

