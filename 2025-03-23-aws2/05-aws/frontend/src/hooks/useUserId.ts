import { jwtDecode } from "jwt-decode"
import { useContext, useMemo } from "react"
import User from "../models/user/User"
import { AuthContext } from "../components/auth/auth/Auth"

export default function useUserId() {
    const authContext = useContext(AuthContext)!
    const { jwt } = authContext
    // const { name } = jwtDecode<User>(jwt)

    const id = useMemo(() => {
        const { id } = jwtDecode<User>(jwt)
        return id
    }, [ jwt ])
    

    return id
}