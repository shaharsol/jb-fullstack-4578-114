import CommentModel from '../../../models/comment/Comment'
import Comment from '../comment/Comment'
import './Comments.css'

interface CommentsProps {
    comments: CommentModel[]
}
export default function Comments(props: CommentsProps): JSX.Element {

    const { comments } = props

    return (
        <div className='Comments'>
            {comments.map(c =>
                <Comment
                    comment={c}
                />)
            }
        </div>
    )
}