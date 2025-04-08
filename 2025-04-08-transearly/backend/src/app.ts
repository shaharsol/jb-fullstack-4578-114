import cors from 'cors'
import express, { json } from "express"
import { connect } from "./db/mongoose"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import furnituresRouter from "./routers/furnitures"
import dropboxRouter from "./routers/dropbox"
import dropboxAuth from './auth/dropbox'

const app = express();

export async function start() {

    await connect()

    
    // middlewares
    app.use(cors()) // allow any client to use this server

    app.use(json()) // a middleware to extract the post/put/patch data and save it to the request object in case the content type of the request is application/json

    app.use('/', furnituresRouter)
    app.use('/dropbox', dropboxAuth.initialize(), dropboxRouter)

    // special notFound middleware
    app.use(notFound)

    // error middleware
    app.use(errorLogger)
    app.use(errorResponder)

    // app.listen(port, () => console.log(`${name} started on port ${port}...`))
}

export default app
