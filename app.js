const express = require('express')
const {fetchPostsRoute, createPostRoute, editPostRoute, deletePostRoute} = require('./routes/Post')
const {signinRoute, signupRoute} = require('./routes/User')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
    next()
})

app.use(createPostRoute)
app.use(editPostRoute)
app.use(deletePostRoute)
app.use(signupRoute)
app.use(signinRoute)
app.use(fetchPostsRoute)

app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    const message = error.message
    res.status(status).json({message:message})
}) 


mongoose.connect('mongodb+srv://merdi:xvYNYsCh7zBIYziw@cluster0.t7ton.mongodb.net/blog-api?retryWrites=true&w=majority')
 .then(connection => {
    app.listen(4000, () => {
     console.log('server started')
})
 }).catch(err => console.log(err))

