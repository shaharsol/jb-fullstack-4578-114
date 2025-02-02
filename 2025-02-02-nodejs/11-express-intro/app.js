const express = require('express')

const user = {
    name: 'Yuval',
    email: 'yuval@gmail.com',
    age: 23
}

// middleware is any function that gets (req, res, next) 
const logRequest = (req, res, next) => {
    console.log(`got a ${req.method} request to endpoint ${req.url}`)
    next()
}

const connectToMysql = (req, res, next) => {
    console.log('connecting to mysql...')
    next()
}

const disconnectFromMysql = (req, res, next) => {
    console.log('disconnecting from mysql...')
    next()
}

const connectToMongo = (req, res, next) => {
    console.log('connecting to mongo...')
    next()
}

const printUser = (req, res, next) => {
    res.json(user) // after closing a response, i dont neccessarily need a next
}

const saveUser = (req, res, next) => {
    console.log('saved user...')
    res.status(201)
    res.send('user saved successfully') // res.send 
}

const notFound = (req, res, next) => {
    res.status(404)
    res.send('the page u requested was not found on this server.... la la la')
}

const sendWelcomeEmail = (req, res, next) => {
    console.log('sending a welcome email')
    next()
}

const app = express()

app.use(logRequest)

app.use('/user', connectToMysql)
// app.use('/user', disconnectFromMysql)
app.get('/user', printUser)
app.post('/user', connectToMysql, sendWelcomeEmail, saveUser)

app.use('/list', connectToMongo)

app.use(notFound)

app.listen(3000, () => console.log('express app started on port 3000...'))