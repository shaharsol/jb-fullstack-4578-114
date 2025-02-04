const express = require('express')

const userRouter = express.Router()

userRouter.use(connectToMysql)
userRouter.get('/', printUser)
userRouter.post('/', connectToMysql, sendWelcomeEmail, saveUser)
userRouter.use(disconnectFromMysql)

module.exports = {
    userRouter
}
