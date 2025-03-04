import './Post.css'
import PostModel from '../../../models/post/Post'
import ProfileService from '../../../services/auth-aware/Profile'
import { useNavigate } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useAppDispatch } from '../../../redux/hooks'
import { remove } from '../../../redux/profileSlice'
import useService from '../../../hooks/useService'

interface PostProps {
    post: PostModel,
    isAllowActions?: boolean, // === isAllowActions: boolean | undefined
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

    const dispatch = useAppDispatch()

    const profileService = useService(ProfileService)

    async function deleteMe() {
        if (confirm(`are you sure you want to delete "${title}"`)) {
            try {
                await profileService.remove(id)
                dispatch(remove({ id }))
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
            {props.isAllowActions &&
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
