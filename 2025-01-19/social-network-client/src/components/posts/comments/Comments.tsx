import CommentModel from '../../../models/comment/Comment'
import Comment from '../comment/Comment'
import NewComment from '../new-comment/NewComment'
import './Comments.css'

interface CommentsProps {
    comments: CommentModel[]
    postId: string,
    addComment(comment: CommentModel): void
}
export default function Comments(props: CommentsProps): JSX.Element {

    const { comments, postId, addComment } = props

    return (
        <div className='Comments'>
            <div>
                total comments: {comments.length}
            </div>
            <div>
                <NewComment 
                    addComment={addComment}
                    postId={postId}
                />
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