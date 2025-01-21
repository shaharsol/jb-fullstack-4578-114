import { useEffect } from 'react'
import './Feed.css'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/feedSlice'
import Loading from '../../common/loading/Loading'
import useService from '../../../hooks/useService'
import FeedService from '../../../services/auth-aware/feed'

export default function Feed() {
    useTitle('SN - Feed')

    const posts = useAppSelector(state => state.feed.posts)
    const dispatch = useAppDispatch()

    const feedService = useService(FeedService)

    useEffect(() => {
        (async () => {
            try {
                if(posts.length === 0) {
                    const postsFromServer = await feedService.getFeed()
                    dispatch(init(postsFromServer))
                }
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function reload() {
        try {
            const postsFromServer = await feedService.getFeed()
            dispatch(init(postsFromServer))
        } catch (e) {
            alert(e)
        }
    }

    const isNewContent = useAppSelector(state => state.feed.isNewContent)

    return (
        <div className='Feed'>

            {posts.length === 0 && <Loading />}

            {posts.length > 0 && <>

                {isNewContent && <>
                    <div className="info">You have new content in your feed. reload? <button onClick={reload}>yes</button></div>
                </>}

                {posts.map(p => <Post
                key={p.id}
                post={p}
            />)}
            </>}
        </div>
    )
}