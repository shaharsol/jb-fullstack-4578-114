import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profile.jpg'
import followingService from '../../../services/auth-aware/following'
import LoadingButton from '../../common/loading-button/LoadingButton'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { 
    unfollow as unfollowAction, 
    follow as followAction } 
from '../../../redux/followingSlice'

interface FollowProps {
    user: User
}
export default function Follow(props: FollowProps): JSX.Element {

            
    const { user: {id, name} } = props

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const isFollowing = useAppSelector(state => state.following.following.findIndex(f => f.id === id) > -1)

    async function unfollow() {
        if(window.confirm(`are you sure you wanna stop following ${name}?`)) {
            try {
                setIsSubmitting(true)
                await followingService.unfollow(id)
                dispatch(unfollowAction({userId: id}))
            } catch (e) {
                alert(e)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    async function follow() {
        try {
            setIsSubmitting(true)
            await followingService.follow(id)
            dispatch(followAction(props.user))
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
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
                {isFollowing && <LoadingButton 
                    onClick={unfollow}
                    isSubmitting={isSubmitting}
                    buttonText='Unfollow'
                    loadingText='Unfollowing'
                />}

                {!isFollowing && <LoadingButton 
                    onClick={follow}
                    isSubmitting={isSubmitting}
                    buttonText='Follow'
                    loadingText='Following'
                />}
            </div>
        </div>
    )
}