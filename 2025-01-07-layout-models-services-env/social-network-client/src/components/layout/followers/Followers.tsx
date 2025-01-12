import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import followersService from '../../../services/followers'

export default function Followers() {
    const [followers, setFollowers] = useState<User[]>([])

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {followers.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}