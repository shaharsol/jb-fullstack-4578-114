import { useContext } from "react";
import { AuthContext } from "../components/auth/auth/Auth";
import axios, { AxiosInstance } from "axios";
import AuthAware from "../services/auth-aware/AuthAware";
import { SocketContext } from "../components/io/Io";

export default function useService<T extends AuthAware>(Service: {new(axiosInstance: AxiosInstance): T}): T {
    const { jwt } = useContext(AuthContext)!
    const { xClientId } = useContext(SocketContext)
    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${jwt}`,
            'x-client-id': xClientId
        },
    })

    const service = new Service(axiosInstance)
    return service
}