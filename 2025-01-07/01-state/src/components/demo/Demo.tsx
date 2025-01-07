import './Demo.css'

export default function Demo(): JSX.Element {

    const time = new Date().toLocaleTimeString()

    return (
        <div className='Demo'>
            <p>time is {time}</p>
        </div>
    )
}

