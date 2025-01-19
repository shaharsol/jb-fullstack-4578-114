import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'
import { useNavigate } from 'react-router-dom'
import Comments from '../comments/Comments'

interface PostProps {
    post: PostModel,
    isAllowActions?: boolean, // === isAllowActions: boolean | undefined
    remove? (id: string): void,
}
export default function Post(props: PostProps): JSX.Element {

    const { 
        title, 
        body, 
        createdAt, 
        id, 
        comments 
    } = props.post
    const { name } = props.post.user
    const navigate = useNavigate()
    
    async function deleteMe() {
        // props.remove: Function | undefined
        if(props.remove && confirm(`are you sure you want to delete "${title}"`)) {
            // props.remove: Function
            // this action is called type-narrowing.
            try {
                await profileService.remove(id)
                props.remove(id)
                // i was able to delete from the server,
                // this is the point to affect the UI
                // in other words, we need to change the state
            } catch (e) {
                alert(e)
            }
        }
    }

    function editMe() {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='Post'>
            <div>
                {title}
            </div>
            <div>
                by {name} at {createdAt}
            </div>
            <div>
                {body}
            </div>
            { props.isAllowActions && 
                <div>
                    <button onClick={editMe}>Edit</button>
                    <button onClick={deleteMe}>Delete</button>
                </div>
            }
            <Comments 
                comments={comments}
                postId={id}
            />
        </div>
    )
}
