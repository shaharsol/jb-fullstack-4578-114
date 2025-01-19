import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profile.jpg'
import followingService from '../../../services/following'

interface FollowProps {
    user: User
    removeFromFollowingList(userId: string): void
}
export default function Follow(props: FollowProps): JSX.Element {

            
    const { user: {id, name}, removeFromFollowingList } = props

    async function unfollow() {
        if(window.confirm(`are you sure you wanna stop following ${name}?`)) {
            try {
                await followingService.unfollow(id)
                removeFromFollowingList(id)
            } catch (e) {
                alert(e)
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
            </div>
        </div>
    )
}