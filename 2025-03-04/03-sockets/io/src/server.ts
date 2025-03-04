import { Server } from "socket.io";
import config from 'config'
import { v4 } from "uuid";

const port = config.get<number>('io.port')

const io = new Server({
    cors: {
        origin: '*'
    }
})

io.on('connection', socket => {

    console.log('got a new connection')

    socket.emit('welcome', {
        id: v4()
    })

})

io.listen(port)
console.log(`io server started on ${port}`)