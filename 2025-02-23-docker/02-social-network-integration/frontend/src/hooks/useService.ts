import { useContext } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import axios, { AxiosInstance } from "axios";
import AuthAware from "../services/auth-aware/AuthAware";

export default function useService<T extends AuthAware>(Service: {new(axiosInstance: AxiosInstance): T}): T {
    const { jwt } = useContext(AuthContext)!
    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${jwt}`
        },
    })

    const service = new Service(axiosInstance)
    return service
}