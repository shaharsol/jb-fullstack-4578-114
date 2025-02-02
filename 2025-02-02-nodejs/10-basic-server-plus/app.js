const { createServer } = require('http')

const user = {
    name: 'Yuval',
    email: 'yuval@gmail.com',
    age: 23
}

const list = `
name,age,phone
ido,23,55555
mishel,23,44444
daniel,32,33333
`

const requestListener = (request, response) => {

    switch (request.url) {
        case '/user':

            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(user))
                    break;
                case 'POST':
                    response.end('saving user...')
                    break;
                default:
                    response.writeHead(404)
                    response.end('unknown operation')
                    break;
            }
            break;
        case '/list':
            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'text/csv')
                    response.end(list)
                    break;
                case 'POST':
                    response.end('saving list...')
                    break;
                default:
                    response.writeHead(404)
                    response.end('unknown operation')
                    break;
            }
            break;
        default:
            response.writeHead(404)
            response.end('unknown operation')
            break;
    }
}

createServer(requestListener).listen(3000, () => console.log('server started on port 3000...'))