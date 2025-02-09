import { Sequelize } from "sequelize-typescript";
import User from "../models/user";
import config from 'config'

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [ User ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize