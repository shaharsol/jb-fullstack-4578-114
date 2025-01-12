import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDraft'
import profileService from '../../../services/profile'
import Post from '../../../models/post/Post'

interface NewPostProps {
    addPost(post: Post): void
}
export default function NewPost(props: NewPostProps): JSX.Element {

    const { register, handleSubmit } = useForm<PostDraft>()

    async function submit(draft: PostDraft) {
        try {
            const newPost = await profileService.create(draft)
            props.addPost(newPost)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='title' {...register('title')}/>
                <textarea placeholder='post body' {...register('body')} />
                <button>Add Post</button>
            </form>
        </div>
    )
}