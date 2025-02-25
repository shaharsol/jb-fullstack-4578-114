import axios from "axios";
import Login from "../models/user/Login"

class Auth {

    // if a class has only methods, it means it doesn't have data
    // a class without data is called a stateless class
    // a class with data is called a stateful class
    async login(login: Login): Promise<string> {
        const response = await axios.post<{jwt: string}>(`${import.meta.env.VITE_REST_SERVER_URL}/auth/login`, login)
        return response.data.jwt
    }
}

const auth = new Auth()
export default auth;