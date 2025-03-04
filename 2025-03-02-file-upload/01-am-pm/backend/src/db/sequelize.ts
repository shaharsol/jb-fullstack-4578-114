import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Category from "../models/category";
import Product from "../models/product";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    // [ add ALL model classes you created to the array ]:
    models: [ Category, Product ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize