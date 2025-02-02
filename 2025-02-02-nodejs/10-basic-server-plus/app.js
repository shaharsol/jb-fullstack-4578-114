const { createServer } = require('http')

const requestListener = (request, response) => response.end('hello from server')

createServer(requestListener).listen(3000, () => console.log('server started on port 3000...'))