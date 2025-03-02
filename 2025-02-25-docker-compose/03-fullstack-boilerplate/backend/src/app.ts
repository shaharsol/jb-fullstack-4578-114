import express, { json } from "express"
import config from 'config'
import sequelize from "./db/sequelize"
import profileRouter from "./routers/profile"
import followsRouter from "./routers/follows"
import commentsRouter from "./routers/comments"
import feedRouter from "./routers/feed"
// import authRouter from "./routers/auth"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import enforceAuth from "./middlewares/enforce-auth"
import cors from 'cors'

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')
const force = config.get<boolean>('sequelize.sync.force')

const app = express();

(async () => {
    await sequelize.sync({ force })

    // middlewares
    app.use(cors()) // allow any client to use this server

    app.use(json()) // a middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application/json

    // [ if we have auth in this app, uncomment this ]:
    // app.use('/auth', authRouter)

    // [ here is the place to mount routers on the app]:
    // app.use('/profile', profileRouter)

    // special notFound middleware
    app.use(notFound)

    // error middleware
    app.use(errorLogger)
    app.use(errorResponder)

    app.listen(port, () => console.log(`${name} started on port ${port}...`))
})()
