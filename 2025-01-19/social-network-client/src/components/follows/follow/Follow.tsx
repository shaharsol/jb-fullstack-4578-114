import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profile.jpg'
import followingService from '../../../services/following'
import LoadingButton from '../../common/loading-button/LoadingButton'
import { useState } from 'react'

interface FollowProps {
    user: User
    removeFromFollowingList(userId: string): void
}
export default function Follow(props: FollowProps): JSX.Element {

            
    const { user: {id, name}, removeFromFollowingList } = props

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    async function unfollow() {
        if(window.confirm(`are you sure you wanna stop following ${name}?`)) {
            try {
                setIsSubmitting(true)
                await followingService.unfollow(id)
                removeFromFollowingList(id)
            } catch (e) {
                alert(e)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return (
        <div className='Follow'>
            <div>
                <img src={profilePicSource} />
            </div>
            <div>
                {name}
            </div>
            <div>
                <button onClick={unfollow}>unfollow</button>
                <LoadingButton 
                    onClick={unfollow}
                    isSubmitting={isSubmitting}
                    buttonText='Unfollow'
                    loadingText='Unfollowing'
                />
            </div>
        </div>
    )
}