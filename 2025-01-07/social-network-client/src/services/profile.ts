import axios from "axios";
import Post from "../models/post/Post";

class Profile {
    async getProfile(): Promise<Post[]> {
        const response = await axios.get<Post[]>('http://localhost:3003/allow/posts')
        return response.data
    }
}

// singleton
const profile = new Profile()
export default profile