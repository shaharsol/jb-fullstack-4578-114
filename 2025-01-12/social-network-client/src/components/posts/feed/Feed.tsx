import { useEffect, useState } from 'react'
import './Feed.css'
import Post from '../../../models/post/Post'
import feed from '../../../services/feed'

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)

    }, [])

    return (
        <div className='Feed'>
            <ul>
                {posts.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}