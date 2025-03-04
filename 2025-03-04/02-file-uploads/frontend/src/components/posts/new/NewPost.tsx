import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft'
import loadingImageSource from '../../../assets/images/loading.webp'
import { useAppDispatch } from '../../../redux/hooks'
import { newPost } from '../../../redux/profileSlice'
import ProfileService from '../../../services/auth-aware/Profile'
import useService from '../../../hooks/useService'

export default function NewPost(): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    const dispatch = useAppDispatch()

    const profileService = useService(ProfileService)

    async function submit(draft: PostDraft) {
        try {
            const newPostFromServer = await profileService.create(draft)
            reset()
            dispatch(newPost(newPostFromServer))
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='title' {...register('title', {
                    required: {
                        value: true,
                        message: 'you must provide a title'
                    },
                    minLength: {
                        value: 10,
                        message: 'title must be 10 chars long'
                    }
                })} />
                <span className='error'>{formState.errors.title?.message}</span>
                <textarea placeholder='post body' {...register('body', {
                    required: {
                        value: true,
                        message: 'you must provide a body'
                    },
                    minLength: {
                        value: 20,
                        message: 'body must be 10 chars long'
                    },
                })} />
                <span className='error'>{formState.errors.body?.message}</span>
                {!formState.isSubmitting && <button>Add Post</button>}
                {formState.isSubmitting && <p>posting new post... <i><img src={loadingImageSource} /></i></p>}
            </form>
        </div>
    )
}