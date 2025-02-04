const express = require('express')
const axios = require('axios')
const fs = require('fs/promises')

const server = express()

const getUsers = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/usersssssss')
        res.json(response.data)
    } catch (err) {
        next(err)
    }

    /*
    res.json = 

    1. res.setHeader('Content-Type', 'application/json')
    2. res.writeHead(200)
    3. res.end(JSON.stringify(users))
    */
}

const getUser = async (req, res, next) => {
    try {
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${req.query.id}`)
        res.json(response.data)
    } catch (err) {
        next(err)
    }
}

const notFound = (req, res, next) => {
    res.status(404).send('page not found')
}

const errorLogger = async (err, req, res, next) => {
    await fs.appendFile('message.txt', err.toString())
}

server.get('/users', getUsers)
server.get('/user', getUser)
server.use(notFound)

server.use(errorLogger)


server.listen(3000, () => console.log('started...'))

