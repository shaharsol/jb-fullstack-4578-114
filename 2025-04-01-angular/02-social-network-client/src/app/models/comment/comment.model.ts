import { User } from "../user/user.model";

export interface PostComment {
    id: string,
    body: string,
    postId: string,
    user: User
}
