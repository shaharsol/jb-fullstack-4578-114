import express from "express"
import config from 'config'
import sequelize from "./db/sequelize"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')

const app = express()

const force = config.get<boolean>('sequelize.sync.force')
sequelize.sync({ force })

app.listen(port, () => console.log(`${name} started on port ${port}...`))