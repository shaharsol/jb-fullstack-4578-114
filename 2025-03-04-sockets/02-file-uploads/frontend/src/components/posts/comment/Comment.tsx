import CommentModel from '../../../models/comment/Comment'
import './Comment.css'

interface CommentProps {
    comment: CommentModel
}
export default function Comment(props: CommentProps): JSX.Element {

    const { user: { name }, body, createdAt} = props.comment
 
    return (
        <div className='Comment'>
            <div>
                {name} said on {createdAt}:
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}