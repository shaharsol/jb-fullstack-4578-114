import { useEffect, useState } from 'react'
import './Profile.css'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Comment from '../../../models/comment/Comment'

export default function Profile(): JSX.Element {

    // posts: Post[]
    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        document.title = 'SN - Profile'
    }, [])

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

    function remove(id: string): void {
        const index = posts.findIndex(post => post.id === id)
        if (index > -1) {
            const postsAfterRemoval = [...posts]
            postsAfterRemoval.splice(index, 1)
            setPosts(postsAfterRemoval)
        }
    }

    function addPost(post: PostModel): void {
        setPosts([post, ...posts])
    }

    function addComment(comment: Comment): void {
        const postsWithNewComment = [...posts]

        const postToAddCommentTo = postsWithNewComment.find(post => post.id === comment.postId)
        if(postToAddCommentTo) {
            postToAddCommentTo.comments.unshift(comment)
        }

        setPosts(postsWithNewComment)
    }

    return (
        <div className='Profile'>
            <NewPost 
                addPost={addPost} 
            />
            {posts.map(p =>
                <Post
                    key={p.id}
                    post={p}
                    isAllowActions={true}
                    remove={remove}
                    addComment={addComment}
                />
            )}
        </div>
    )
}