import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft'
import profileService from '../../../services/profile'
import Post from '../../../models/post/Post'

interface NewPostProps {
    addPost(post: Post): void
}
export default function NewPost(props: NewPostProps): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    async function submit(draft: PostDraft) {
        try {
            const newPost = await profileService.create(draft)
            reset()
            props.addPost(newPost)
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
                })}/>
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
                <button>Add Post</button>
            </form>
        </div>
    )
}