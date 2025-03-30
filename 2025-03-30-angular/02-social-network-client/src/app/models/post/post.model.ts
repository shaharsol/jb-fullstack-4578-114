import { PostComment } from "../comment/comment.model";
import { User } from "../user/user.model";

export interface Post {
    id: string,
    title: string,
    body: string,
    createdAt: string,
    user: User,
    comments: PostComment[]
}
