import Comment from "../comment/Comment";
import User from "../user/User";
import BasePost from "./BasePost";

export default interface Post extends BasePost {
    id: string,
    userId: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    user: User
    comments: Comment[]
}