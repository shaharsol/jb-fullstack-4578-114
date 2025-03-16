import { useForm } from 'react-hook-form'
import './Login.css'
import LoginModel from '../../../models/user/Login'
import auth from '../../../services/auth'
import { useContext } from 'react'
import { AuthContext } from '../auth/Auth'

export default function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()

    const { newLogin } = useContext(AuthContext)!

    async function submit(login: LoginModel) {
        const jwt = await auth.login(login)
        // here i need to code something that will set the JWT in the AuthContext state
        newLogin(jwt)
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='username' {...register('username')} />
                <input placeholder='password' type="password" {...register('password')} />
                <button>Login</button>
            </form>
        </div>
    )
}