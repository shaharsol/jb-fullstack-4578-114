import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profile.jpg'
import followingService from '../../../services/following'
import LoadingButton from '../../common/loading-button/LoadingButton'
import { useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { unfollow as unfollowAction } from '../../../redux/followingSlice'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps): JSX.Element {

            
    const { user: {id, name} } = props

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    async function unfollow() {
        if(window.confirm(`are you sure you wanna stop following ${name}?`)) {
            try {
                setIsSubmitting(true)
                await followingService.unfollow(id)
                // removeFromFollowingList(id)
                dispatch(unfollowAction({userId: id}))
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