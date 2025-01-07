import { useState } from 'react'
import './Profile.css'
import Post from '../../../models/post/Post'

export default function Profile() {

    // posts: Post[]
    const posts = useState<Post[]>([])

    return (
        <div className='Profile'>
            profile
        </div>
    )
}