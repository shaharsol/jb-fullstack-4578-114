import { useRef, useState } from 'react'
import './Demo.css'

export default function Demo(): JSX.Element {

    // const startTime = new Date().toLocaleTimeString()
    const startTime = useRef<string>(new Date().toLocaleTimeString())  
    const [currentTime, setCurrentTime] = useState<string>(startTime.current)

    setInterval(() => {
        console.log('modifying time...')
        setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div className='Demo'>
            <p>start time: {startTime.current}</p>
            <p>current time: {currentTime}</p>
        </div>
    )
}