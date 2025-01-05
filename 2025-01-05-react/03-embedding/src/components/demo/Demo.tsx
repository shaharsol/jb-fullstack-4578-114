import './Demo.css'

export default function Demo(): JSX.Element {

    // primitives
    const name = 'Kfir'
    const age = 22
    const isAdult = age > 18
    const grades = [70, 80, 90]

    const dogs = [
        {
            id: 1,
            name: 'cheif',
            age: 6
        },
        {
            id: 2,
            name: 'noop',
            age: 4
        }
    ]

    function sayHi() {
        alert('hi')
    }

    return (
        <div className='Demo'>
            <p>hello {name}</p>
            <p>you are {age} years old</p>
            <p>you are an {isAdult ? 'adult' : 'child'}</p>
            {/* <p>your grades are {grades}</p> */}
            <p>your grades are:</p>
            <ul>
                {grades.map((grade, index) => <li key={index}>{grade}</li>)}
            </ul>
            <button onClick={sayHi}>say hi</button>
            <p>dogs:</p>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map(({id, name, age}) => <tr key={id}>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}