import express from "express"
import config from 'config'
import sequelize from "./db/sequelize"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')

const app = express()

sequelize.sync()

app.listen(port, () => console.log(`${name} started on port ${port}...`))