const express = require('express')
const axios = require('axios')
const { toXML } = require('jstoxml')

const server = express()

// naive way...
// const getUsers = async (req, res, next ) => {
//     // getData from server
//     const response = await axios('https://jsonplaceholder.typicode.com/users')
//     let users = response.data
    
//     // filter users if required
//     if (req.query.search) {
//         users = users.filter(({name}) => name.includes(req.query.search))
//     }

//     // convert to XML if required
//     if (req.query.format === 'xml') {
//         res.setHeader('Content-type', 'text/xml')
//         return res.send(toXML(users))
//     } 
//     res.json(users)
// }

// server.get('/users', getUsers)

// modular way...
const getUsers = async (req, res, next) => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    req.data = response.data
    next()
}

const filterData = (req, res, next) => {
    if (req.query.search) {
        req.data = req.data.filter(({name}) => name.includes(req.query.search))
    }
    next()
}

const respond = (req, res, next) => {
    if (req.query.format === 'xml') {
        res.setHeader('Content-type', 'text/xml')
        return res.send(toXML(req.data))
    } 
    res.json(req.data)
}

const errorHandler = (err, req, res, next) => {
    res.status(500).send(err.toString())
}

server.get('/users', getUsers, filterData, respond, errorHandler)

server.listen(3000, () => console.log('started'))