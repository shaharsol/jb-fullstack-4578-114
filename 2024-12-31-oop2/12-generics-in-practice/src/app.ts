import axios from 'axios'

async function printUsers() {
    const users = await axios('https://jsonplaceholder.typicode.com/users')
}

printUsers()


