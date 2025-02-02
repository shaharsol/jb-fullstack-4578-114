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

    // log request
    switch (request.url) {
        case '/user':
            // connect to mysql
            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(user))
                    break;
                case 'POST':
                    // here i save the info to the database
                    response.end('saving user...')
                    break;
                default:
                    response.writeHead(404)
                    response.end('unknown operation')
                    break;
            }
            // disconnect to mysql
            break;
        case '/list':
                // connect to mongodb
                switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'text/csv')
                    response.end(list)
                    break;
                case 'POST':
                    // save in database
                    response.end('saving list...')
                    break;
                default:
                    response.writeHead(404)
                    response.end('unknown operation')
                    break;
            }
            // diconnect to mongodb
            break;
        default:
            response.writeHead(404)
            response.end('unknown operation')
            break;
    }
}

createServer(requestListener).listen(3000, () => console.log('server started on port 3000...'))