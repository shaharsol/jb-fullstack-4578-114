import { useEffect, useState } from 'react'
import './Followers.css'
import User from '../../../models/user/User'
import Follow from '../follow/Follow'
import useService from '../../../hooks/useService'
import FollowersService from '../../../services/auth-aware/Followers'

export default function Followers() {
    const [followers, setFollowers] = useState<User[]>([])

    const followersService = useService(FollowersService)

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <h3>People who follow me</h3>
            {followers.map(follow => <Follow
                key={follow.id}
                user={follow}
            ></Follow>)}
        </div>
    )
}