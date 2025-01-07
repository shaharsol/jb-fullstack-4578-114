import Comment from "../comment/Comment";
import User from "../user/User";

export default interface Post {
    id: string,
    userId: string,
    title: string,
    body: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    user: User
    comments: Comment[]
}