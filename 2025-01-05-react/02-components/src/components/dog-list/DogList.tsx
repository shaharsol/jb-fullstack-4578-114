import Cheif from '../dogs/cheif/Cheif'
import Noop from '../dogs/noop/Noop'
import './DogList.css'

export default function DogList(): JSX.Element {
    return (
        <div className='DogList'>
            <Cheif />
            <Noop />
        </div>
    )
}