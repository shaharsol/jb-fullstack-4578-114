import { useEffect } from 'react'
import './Feed.css'
import feed from '../../../services/feed'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/feedSlice'
import Loading from '../../common/loading/Loading'

export default function Feed() {
    useTitle('SN - Feed')

    const posts = useAppSelector(state => state.feed.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                if(posts.length === 0) {
                    const postsFromServer = await feed.getFeed()
                    dispatch(init(postsFromServer))
                }
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <div className='Feed'>

            {posts.length === 0 && <Loading />}

            {posts.length > 0 && <>
                {posts.map(p => <Post
                key={p.id}
                post={p}
            />)}
            </>}
        </div>
    )
}