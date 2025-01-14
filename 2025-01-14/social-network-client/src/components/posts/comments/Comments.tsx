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
            <div>
                total comments: {comments.length}
            </div>
            {comments.map(c =>
                <Comment
                    key={c.id}
                    comment={c}
                />)
            }
        </div>
    )
}