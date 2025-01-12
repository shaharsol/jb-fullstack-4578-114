import User from "../user/User";

export default interface Comment {
    id: string,
    postId: string,
    userId: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    user: User
}