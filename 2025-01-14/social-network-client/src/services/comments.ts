import axios from "axios"
import Comment from "../models/comment/Comment"
import CommentDraft from "../models/comment/CommentDraft"

class Comments {
    async create(postId: string, draft: CommentDraft): Promise<Comment> {
        const response = await axios.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${postId}`, draft)
        return response.data
    }
}

const comments = new Comments()
export default comments