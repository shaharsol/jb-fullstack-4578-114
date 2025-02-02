(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    data.forEach(({name}) => console.log(name))
})()