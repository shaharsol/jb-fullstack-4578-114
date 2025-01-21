import { createContext, PropsWithChildren, useState } from 'react'
import './Auth.css'


interface AuthContextInterface {
    jwt: string,
    setJwt: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

export default function Auth(props: PropsWithChildren): JSX.Element {  
    
    const [ jwt, setJwt ] = useState<string>('')

    const { children } = props

    return (
        <AuthContext.Provider value={ { jwt, setJwt } } >
            {children}
        </AuthContext.Provider>
    )
}