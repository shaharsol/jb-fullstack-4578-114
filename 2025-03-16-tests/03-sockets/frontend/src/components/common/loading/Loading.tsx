import './Loading.css'
import loadingSource from '../../../assets/images/loading.webp'

export default function Loading(): JSX.Element {
    return (
        <div className='Loading'>
            <img src={loadingSource} />
        </div>
    )
}