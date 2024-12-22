async function showUsers(): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(users)
}

showUsers()
