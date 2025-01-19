import './LoadingButton.css'
import loadingImageSource from '../../../assets/images/loading.webp'

interface LoadingButtonProps {
    isSubmitting: boolean,
    buttonText: string,
    loadingText: string
}
export default function LoadingButton(props: LoadingButtonProps): JSX.Element {

    const {
        isSubmitting,
        buttonText,
        loadingText
    } = props

    return (
        <div className='LoadingButton'>
            {!isSubmitting && <button>{buttonText}</button>}
            {isSubmitting && <p>{loadingText}... <i><img src={loadingImageSource}/></i></p>}
        </div>
    )
}