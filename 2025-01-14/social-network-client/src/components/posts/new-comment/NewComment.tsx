import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft'
import Comment from '../../../models/comment/Comment'
import commentsService from '../../../services/comments'

interface NewCommentProps{
    postId: string
}
export default function NewComment(props: NewCommentProps): JSX.Element {

    const { postId } = props

    const { 
        register, 
        handleSubmit, 
        formState, 
        reset 
    } = useForm<CommentDraft>()  

    async function submit(draft: CommentDraft) {
        try {
            await commentsService.create(postId, draft)
        } catch (e) {

        }
    }

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea {...register('body', {
                    required: {
                        value: true,
                        message: 'Comment body is mandatory'
                    },
                    minLength: {
                        value: 20,
                        message: 'comment must be at least 20 chars long'
                    }
                })}></textarea>
                <span className="error">{formState.errors.body?.message}</span>
                <button>Post Comment</button>
            </form>
        </div>
    )
}