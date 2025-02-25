import './Footer.css'

export default function Footer() {
    return (
        <div className='Footer'>
            <p>server is: {import.meta.env.VITE_REST_SERVER_URL}</p>            
        </div>
    )
}