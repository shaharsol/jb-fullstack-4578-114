import Eden from '../cats/eden/Eden'
import Ginger from '../cats/ginger/Ginger'
import './CatList.css'

export default function CatList(): JSX.Element {
    return (
        <div className='CatList'>
           <Eden />
           <Ginger />
        </div>
    )
}