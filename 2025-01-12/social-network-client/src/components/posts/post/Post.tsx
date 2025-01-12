import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'

interface PostProps {
    post: PostModel,
    isAllowActions: boolean,
    remove (id: string): void
}
export default function Post(props: PostProps): JSX.Element {

    const { title, body, createdAt, id } = props.post
    const { name } = props.post.user
    
    async function deleteMe() {
        if(confirm(`are you sure you want to delete "${title}"`)) {
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
            <div>
                <button onClick={deleteMe}>Delete</button>
            </div>
        </div>
    )
}