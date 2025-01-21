import Comment from "../../models/comment/Comment"
import CommentDraft from "../../models/comment/CommentDraft"
import AuthAware from "./AuthAware"

export default class Comments extends AuthAware {
    
    async create(postId: string, draft: CommentDraft): Promise<Comment> {
        const response = await this.axiosInstance.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft)
        return response.data
    }
}