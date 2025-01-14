import { useEffect, useState } from 'react'
import './Feed.css'
import PostModel from '../../../models/post/Post'
import feed from '../../../services/feed'
import Post from '../post/Post'
import Comment from '../../../models/comment/Comment'
import addComment from '../common/addComment'

export default function Feed() {
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        document.title = 'SN - Feed'
    }, [])

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)

    }, [])

    function addComment(comment: Comment): void {
        const postsWithNewComment = [...posts]
    
        const postToAddCommentTo = postsWithNewComment.find(post => post.id === comment.postId)
        if(postToAddCommentTo) {
            postToAddCommentTo.comments.unshift(comment)
        }
    
        setPosts(postsWithNewComment)
    }

    return (
        <div className='Feed'>
            {posts.map(p => <Post
                key={p.id}
                post={p}
                addComment={addComment}
            />)}
        </div>
    )
}