import { useParams } from 'react-router-dom'
import './EditPost.css'
import profileService from '../../../services/profile'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PostDraft from '../../../models/post/PostDraft'

export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset} = useForm<PostDraft>()

    useEffect(() => {
        if(id) {
            profileService.getPost(id)
                .then(reset)
                .catch(alert)
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            // const newPost = await profileService.create(draft)
            // reset()
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='EditPost'>
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