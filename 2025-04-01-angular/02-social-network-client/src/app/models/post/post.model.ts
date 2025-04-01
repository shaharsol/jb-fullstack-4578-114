import { PostComment } from "../comment/comment.model";
import { User } from "../user/user.model";
import { Draft } from "./draft.model";

export interface Post extends Draft {
    id: string,
    createdAt: string,
    user: User,
    comments: PostComment[]
}
