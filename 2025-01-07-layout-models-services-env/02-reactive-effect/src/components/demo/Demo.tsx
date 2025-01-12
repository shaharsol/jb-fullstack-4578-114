import { useEffect, useState } from 'react'
import './Demo.css'

export default function Demo(): JSX.Element {

    const [animals, setAnimals] = useState<string[]>([])
    const [isDogs, setIsDogs] = useState<boolean>(true)

    // imagional server function
    function getDogs() {
        return ['noop', 'chief', 'toy']
    }

    // imagional server function
    function getCats() {
        return ['gingo', 'eden']
    }

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats()) 
    }, [isDogs])

    function selectChanged() {
        setIsDogs(!isDogs)
    }

    return (
        <div className='Demo'>
            <select onChange={selectChanged}>
                <option value="dogs">dogs</option>
                <option value="cats">cats</option>
            </select>
            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li>)}
            </ul>
        </div>
    )
}

