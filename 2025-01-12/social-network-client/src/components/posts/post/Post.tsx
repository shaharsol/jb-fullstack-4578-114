import './Post.css'
import PostModel from '../../../models/post/Post'

interface PostProps {
    post: PostModel
}
export default function Post(props: PostProps): JSX.Element {

    const { title, body, createdAt} = props.post
    const { name } = props.post.user

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
        </div>
    )
}