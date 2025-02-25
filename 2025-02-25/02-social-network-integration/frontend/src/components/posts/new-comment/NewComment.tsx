import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft'
import LoadingButton from '../../common/loading-button/LoadingButton'
import { useAppDispatch } from '../../../redux/hooks'
import { addComment as addCommentProfile } from '../../../redux/profileSlice'
import { addComment as addCommentFeed } from '../../../redux/feedSlice'
import CommentsService from '../../../services/auth-aware/Comments'
import useService from '../../../hooks/useService'

interface NewCommentProps {
    postId: string,
}
export default function NewComment(props: NewCommentProps): JSX.Element {

    const { postId } = props

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm<CommentDraft>()

    const dispatch = useAppDispatch()

    const commentsService = useService(CommentsService)

    async function submit(draft: CommentDraft) {
        try {
            const newComment = await commentsService.create(postId, draft)
            reset()
            dispatch(addCommentProfile(newComment))
            dispatch(addCommentFeed(newComment))
        } catch (e) {
            alert(e)
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
                <LoadingButton
                    isSubmitting={formState.isSubmitting}
                    buttonText='Post Comment'
                    loadingText='Posting comment'
                />
            </form>
        </div>
    )
}