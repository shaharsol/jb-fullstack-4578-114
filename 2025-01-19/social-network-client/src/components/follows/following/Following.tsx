import './Following.css'
import { useEffect } from 'react'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followingSlice'

export default function Following() {
    // const [following, setFollowing] = useState<User[]>([])
    const following = useAppSelector(state => state.following.following)

    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                const following = await followingService.getFollowing()
                dispatch(init(following))
            } catch (e) {
                alert(e)
            }
        })()        
    }, [ dispatch ])

    function removeFromFollowingList(userId: string): void {
        console.log(userId)
        // const newFollowing = following.filter(f => f.id !== userId)
        // setFollowing(newFollowing)
    }

    return (
        <div className='Following'>

            {following.length === 0 && <Loading />}
            {following.length > 0 && <>
                <h3>People I follow</h3>
                {following.map(follow => <Follow
                    key={follow.id}
                    user={follow}
                    removeFromFollowingList={removeFromFollowingList}
                ></Follow>)}        
            </>}
        </div>
    )
}