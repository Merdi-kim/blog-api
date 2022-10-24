const express = require('express')
const {body} = require('express-validator')
const {signinHandler, signupHandler} = require('../controllers/User')

const router = express.Router()

const checks = [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({min:5}).withMessage('Password should be at least 5 characters long')
]


router.post('/signup',checks, signupHandler)

router.post('/signin',checks, signinHandler)

module.exports = router