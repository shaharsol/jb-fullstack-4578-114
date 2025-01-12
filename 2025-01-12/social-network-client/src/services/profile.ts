import axios from "axios";
import Post from "../models/post/Post";

class Profile {
    async getProfile(): Promise<Post[]> {
        const response = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/posts`)
        return response.data
    }

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/posts/${id}`)
        return response.data
    }
}

// singleton
const profile = new Profile()
export default profile