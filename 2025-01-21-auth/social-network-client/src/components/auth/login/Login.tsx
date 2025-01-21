import { useForm } from 'react-hook-form'
import './Login.css'
import LoginModel from '../../../models/user/Login'
import auth from '../../../services/auth'

export default function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()

    async function submit(login: LoginModel) {
        const jwt = await auth.login(login)
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