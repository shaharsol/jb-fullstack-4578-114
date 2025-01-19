import { useEffect, useState } from 'react'
import './Feed.css'
import PostModel from '../../../models/post/Post'
import feed from '../../../services/feed'
import Post from '../post/Post'
import useTitle from '../../../hooks/useTitle'

export default function Feed() {
    const [posts, setPosts] = useState<PostModel[]>([])

    useTitle('SN - Feed')

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)

    }, [])

    return (
        <div className='Feed'>
            {posts.map(p => <Post
                key={p.id}
                post={p}
            />)}
        </div>
    )
}