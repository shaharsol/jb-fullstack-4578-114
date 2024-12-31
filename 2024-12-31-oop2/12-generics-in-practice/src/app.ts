import axios from 'axios'



interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string
    }
}

async function printUsers() {
    const users = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    
    console.log(users)
}

printUsers()


