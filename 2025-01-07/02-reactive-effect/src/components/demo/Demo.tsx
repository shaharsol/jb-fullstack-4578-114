import { useEffect, useState } from 'react'
import './Demo.css'

export default function Demo(): JSX.Element {

    // let time = new Date().toLocaleTimeString()
    let [time, setTime] = useState<string>(new Date().toLocaleTimeString())
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('setting time...')
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className='Demo'>
            <p>time is {time}</p>
        </div>
    )
}

