import { Sequelize } from "sequelize-typescript";
import User from "../models/user";
import config from 'config'
import Post from "../models/post";
import Comment from "../models/comment";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [ User, Post, Comment ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize