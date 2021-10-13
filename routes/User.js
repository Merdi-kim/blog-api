const express = require('express')
const {body} = require('express-validator')
const {signinHandler, signupHandler} = require('../controllers/User')

const router = express.Router()


const signupRoute = router.post('/signup',[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password should be at least 5 characters long')
], signupHandler)

const signinRoute = router.post('/signin',[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password should be at least 5 characters long')
], signinHandler)

module.exports = {signupRoute, signinRoute}