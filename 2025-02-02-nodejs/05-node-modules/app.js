const axios = require('axios');

(async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    response.data.forEach(({name}) => console.log(name))
})()