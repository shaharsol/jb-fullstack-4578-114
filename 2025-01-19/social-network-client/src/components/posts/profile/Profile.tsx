import { useEffect } from 'react'
import './Profile.css'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/profileSlice'

export default function Profile(): JSX.Element {


    useTitle('SN - Profile')

    const posts = useAppSelector(state => state.profile.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                if(posts.length === 0) {
                    const postsFromServer = await profile.getProfile()
                    dispatch(init(postsFromServer))
                }
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    function remove(id: string): void {
        const index = posts.findIndex(post => post.id === id)
        if (index > -1) {
            const postsAfterRemoval = [...posts]
            postsAfterRemoval.splice(index, 1)
            // setPosts(postsAfterRemoval)
        }
    }

    return (
        <div className='Profile'>

            { posts.length === 0 && <Loading />}

            { posts.length > 0 && <>
                <NewPost />
                {posts.map(p =>
                    <Post
                        key={p.id}
                        post={p}
                        isAllowActions={true}
                        remove={remove}
                    />
                )}
            </>}

        </div>
    )
}