import { User } from "../user/user.model";

export interface PostComment {
    body: string,
    postId: string,
    user: User
}
