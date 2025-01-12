import './Following.css'
import { useEffect, useState } from 'react'
import User from '../../../models/user/User'
import followingService from '../../../services/following'

export default function Following() {
    const [following, setFollowing] = useState<User[]>([])

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {following.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}