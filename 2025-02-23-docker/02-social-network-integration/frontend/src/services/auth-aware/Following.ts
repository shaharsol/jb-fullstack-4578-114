import User from "../../models/user/User";
import AuthAware from "./AuthAware";

export default class Following extends AuthAware{

    async getFollowing(): Promise<User[]> {
        const response = await this.axiosInstance.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`)
        return response.data
    }

    async unfollow(userId: string): Promise<boolean> {
        const response = await this.axiosInstance.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${userId}`)
        return response.data
    }

    async follow(userId: string): Promise<boolean> {
        const response = await this.axiosInstance.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${userId}`)
        return response.data
    }

}
