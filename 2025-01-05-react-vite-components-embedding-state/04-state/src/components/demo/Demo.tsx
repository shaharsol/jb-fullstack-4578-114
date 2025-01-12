import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo(): JSX.Element {

    // const startTime = new Date().toLocaleTimeString()
    const startTime = useRef<string>(new Date().toLocaleTimeString())  
    const [currentTime, setCurrentTime] = useState<string>(startTime.current)

    // useEffect 2nd param (the array) has 3 options:
    // 1. do not pass it at all: the effect will run with every render and rerender of the component
    // 2. pass an empty array: run the effect only once, only at initial render
    // 3. pass an array containg variable: the effect will be reactive
    // to the variables. it will run everytime a variable changes
    useEffect(() => {
        // initialization
        const intervalId = setInterval(() => {
            console.log('modifying time...')
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000)
        // destruction
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className='Demo'>
            <p>start time: {startTime.current}</p>
            <p>current time: {currentTime}</p>
        </div>
    )
}