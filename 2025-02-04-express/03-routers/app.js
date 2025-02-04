const express = require('express')
const { userRouter } = require('./users-router')

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
    const mysql = 'this is my mysql connection'
    req.mysql = 
    req.fjkdfhgjh = 3
    if (Math.random() > 0.5 ) next ('there was an error connecting to the database')
    else next() // passing ANYTHING inside a next() call, tells express, i had an error and here it is
}

const disconnectFromMysql = (req, res, next) => {
    console.log('disconnecting from mysql...')
    next() // this tells express to move the wand to the next middelware
}

const connectToMongo = (req, res, next) => {
    console.log('connecting to mongo...')
    next()
}

const printUser = (req, res, next) => {
    console.log(req.mysql)
    res.json(user) // after closing a response, i dont neccessarily need a next
}

const saveUser = (req, res, next) => {
    console.log('saved user...')
    res.status(201)
    res.send('user saved successfully') // res.send 
}

const notFound = (req, res, next) => {
    // res.status(404)
    // res.send('the page u requested was not found on this server.... la la la')
    next({
        statusCode: 404,
        message: 'the page u requested was not found on this server.... la la la'
    })
}

const sendWelcomeEmail = (req, res, next) => {
    console.log('sending a welcome email')
    next()
}

const errorLogger = (err, req, res, next) => {
    console.log(`there was an error somewhere and this is it: ${err}`)
    next(err)
}

const pagerDuty = (err, req, res, next) => {
    console.log(`sending the SMS to the current TORAN`)
    next(err)
}

const errorResponder = (err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || 'something bad happened...')

    /*
    res.send =

    res.setHeader('Content-type': 'text/html')
    res.end()
    */
}

const app = express()

app.use('/user', userRouter)
app.use('/list', listRouter)
app.use('/admin', adminRouter)
app.use('/products', productsRouter)

app.use(notFound)

app.use(errorLogger)
app.use(pagerDuty)
app.use(errorResponder)

app.listen(3000, () => console.log('express app started on port 3000...'))