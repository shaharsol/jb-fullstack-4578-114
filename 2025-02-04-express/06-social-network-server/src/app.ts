import express from "express"
import config from 'config'

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')

const app = express()

app.listen(port, () => console.log(`${name} started on port ${port}...`))