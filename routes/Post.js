const express = require('express')
const {fetchPostsHandler, createPostHandler, editPostHandler, deletePostHandler} = require('../controllers/Post')

const router = express.Router()


const fetchPostsRoute = router.get('/', fetchPostsHandler)

const createPostRoute = router.post('/createPost', createPostHandler)

const editPostRoute = router.post('/editPost', editPostHandler)

const deletePostRoute = router.post('/deletePost', deletePostHandler)

module.exports = {fetchPostsRoute, createPostRoute, editPostRoute, deletePostRoute}