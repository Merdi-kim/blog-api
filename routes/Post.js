const express = require('express')
const {fetchPostsHandler, createPostHandler, editPostHandler, deletePostHandler} = require('../controllers/Post')

const router = express.Router()


router.get('/', fetchPostsHandler)

router.post('/createPost', createPostHandler)

router.put('/editPost', editPostHandler)

router.delete('/deletePost', deletePostHandler)

module.exports = router