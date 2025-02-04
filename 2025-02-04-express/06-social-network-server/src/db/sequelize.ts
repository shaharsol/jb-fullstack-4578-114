import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import config from 'config'

const sequelize = new Sequelize({
    models: [ User ],
    logging: console.log,
    dialect: 'mysql',
    ...config.get('db')
})

export default sequelize