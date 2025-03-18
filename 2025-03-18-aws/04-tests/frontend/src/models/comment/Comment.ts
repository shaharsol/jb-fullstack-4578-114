import User from "../user/User";
import CommentDraft from "./CommentDraft";

export default interface Comment extends CommentDraft{
    id: string,
    postId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    user: User
}