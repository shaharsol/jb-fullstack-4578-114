import CatList from '../cat-list/CatList'
import DogList from '../dog-list/DogList'
import './PetStore.css'

export default function PetStore() {
    return (
        <div className="PetStore">
            <DogList />
            <CatList />
        </div>
    )
}
