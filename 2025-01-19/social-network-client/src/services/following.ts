import axios from "axios";
import User from "../models/user/User";

class Following {
    async getFollowing(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return response.data
    }

    async unfollow(userId: string): Promise<boolean> {
        const response = await axios.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${userId}`)
        return response.data
    }

}

// singleton
const following = new Following()
export default following