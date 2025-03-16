import Post from "../../models/post/Post";
import AuthAware from "./AuthAware";

export default class Feed extends AuthAware{
    async getFeed(): Promise<Post[]> {
        const response = await this.axiosInstance.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/feed`)
        return response.data
    }
}