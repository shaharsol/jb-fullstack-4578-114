import { useContext } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import axios from "axios";
import Following from "../services/auth-aware/following";

export default function useService() {
    const { jwt } = useContext(AuthContext)!
    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    const followingService = new Following(axiosInstance)
    return followingService
}