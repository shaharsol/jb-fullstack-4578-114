import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PostDraft from '../../../models/post/PostDraft'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { update } from '../../../redux/profileSlice'
import useService from '../../../hooks/useService'
import ProfileService from '../../../services/auth-aware/Profile'

export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { handleSubmit, register, formState, reset } = useForm<PostDraft>()
    const navigate = useNavigate()

    const post = useAppSelector(state => state.profile.posts.find(p => p.id === id))
    const dispatch = useAppDispatch()

    const profileService = useService(ProfileService)

    useEffect(() => {
        if (id && post) {
            // profileService.getPost(id)
            //     .then(reset)
            //     .catch(alert)
            const { title, body } = post
            reset({ title, body })
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                const updatedPost = await profileService.update(id, draft)
                dispatch(update(updatedPost))
                navigate('/profile')
            }
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
                <button>Update Post</button>
            </form>
        </div>
    )
}