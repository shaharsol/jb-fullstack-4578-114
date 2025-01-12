import './Post.css'
import PostModel from '../../../models/post/Post'
import profileService from '../../../services/profile'

interface PostProps {
    post: PostModel
}
export default function Post(props: PostProps): JSX.Element {

    const { title, body, createdAt, id } = props.post
    const { name } = props.post.user
    
    async function deleteMe() {

        try {
            await profileService.remove(id)
        } catch (e) {
            alert(e)
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