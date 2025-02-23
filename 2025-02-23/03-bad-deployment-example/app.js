const response = await fetch('https://jsonplaceholder.typicode.com/users')
const json = await response.json()
console.log(json)