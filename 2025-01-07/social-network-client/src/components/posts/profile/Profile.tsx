import { useEffect, useState } from 'react'
import './Profile.css'
import Post from '../../../models/post/Post'
import profile from '../../../services/profile'

export default function Profile(): JSX.Element {

    // posts: Post[]
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        profile.getProfile().then(setPosts)
    }, [])

    return (
        <div className='Profile'>
            <ul>
                {posts.map(({id, title}) => <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}