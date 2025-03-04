import express, { json } from "express"
import config from 'config'
import sequelize from "./db/sequelize"
import profileRouter from "./routers/profile"
import followsRouter from "./routers/follows"
import commentsRouter from "./routers/comments"
import feedRouter from "./routers/feed"
import authRouter from "./routers/auth"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import enforceAuth from "./middlewares/enforce-auth"
import cors from 'cors'
import fileUpload from "express-fileupload"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force')

const app = express();

(async () => {
    await sequelize.sync({ force })

    // middlewares
    app.use(cors()) // allow any client to use this server

    // allow cors from a single specific client:
    // app.use(cors({
    //     origin: 'http://localhost:5173'
    // }))

    // allow cors from a list of clients:
    // app.use(cors({
    //     origin: ['http://localhost:5173', 'https://google.com']
    // }))
    app.use(json()) // a middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application/json
    app.use(fileUpload())

    app.use('/auth', authRouter)
    app.use('/profile', profileRouter)
    app.use('/follows', followsRouter)
    app.use('/comments', commentsRouter)
    app.use('/feed', feedRouter)

    // special notFound middleware
    app.use(notFound)

    // error middleware
    app.use(errorLogger)
    app.use(errorResponder)

    app.listen(port, () => console.log(`${name} started on port ${port}...`))
})()
