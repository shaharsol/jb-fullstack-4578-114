import axios from "axios";
import Post from "../models/post/Post";

class Profile {
    async getProfile(): Promise<Post[]> {
        const response = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/posts`)
        return response.data
    }
}

// singleton
const profile = new Profile()
export default profile