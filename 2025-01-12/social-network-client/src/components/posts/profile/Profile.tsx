import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'

export default function Profile(): JSX.Element {

    // posts: Post[]
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        // useEffect disallows the callback function to be async
        // so we either use then:
        profile.getProfile()
            .then(setPosts)
            .catch(alert)

        // or an async IIFE:            
        // (async () => {
        //     try {
        //         const profilePosts = await profile.getProfile()
        //         setPosts(profilePosts)
        //     } catch (e) {
        //         alert(e)
        //     }
        // })()
    }, [])

    return (
        <div className='Profile'>
            {posts.map(p => <Post 
                            key={p.id} 
                            post={p}
                            >
                            </Post>)}
        </div>
    )
}