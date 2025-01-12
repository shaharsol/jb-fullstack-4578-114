import { useEffect, useState } from 'react'
import './Feed.css'
import PostModel from '../../../models/post/Post'
import feed from '../../../services/feed'
import Post from '../post/Post'

export default function Feed() {
    const [posts, setPosts] = useState<PostModel[]>([])

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
                            ></Post>)}
        </div>
    )
}