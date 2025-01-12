import './NewPost.css'

export default function NewPost(): JSX.Element {
    return (
        <div className='NewPost'>
            <form>
                <input placeholder='title'/>
                <textarea placeholder='post body'></textarea>
                <button>Add Post</button>
            </form>
        </div>
    )
}