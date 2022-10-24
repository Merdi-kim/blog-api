const express = require('express')
const {config} = require('dotenv')
const postRoutes = require('./routes/Post')
const userRoutes  = require('./routes/User')
const mongoose = require('mongoose')

const app = express()
config()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
    next()
})

app.use(postRoutes)
app.use(userRoutes)

app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    const message = error.message
    res.status(status).json({message:message})
}) 

mongoose.connect(process.env.DB_CONNECTOR)
 .then(connection => {
    app.listen(process.env.PORT || 4000, () => {
        console.log('server up and running')
    })
 }).catch(err => console.log(err))

