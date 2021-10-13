const User = require('../Modals/USER')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

exports.signupHandler = (req, res, next) => {
    const name = req.body.name 
    const email = req.body.email 
    const password = req.body.password
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }

    User.findOne()
     .then(user => {
        if (user) {
            return res.status(400).json({message:"Email already exists"})
        }
        bcrypt.hash(password, 12)
     .then(password => {
        User.create({
            name, email, password
        })
         .then(result => {
            res.status(200).json({message:'User has successfully been signed'})
         })
         .catch(err => {
            throw new Error(err)
         })
     }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
     })
     })
    
}

exports.signinHandler = (req, res, next) => {
    const email = req.body.email 
    const password = req.body.password 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }

    User.findOne({email:email})
     .then(user => {
         if (!user) {
            return res.status(400).json({message:"User not found"})
         }
        bcrypt.compare(password, user.password, (err, success) => {
            if (success) {
                res.status(200).json({message:"Signin user"})
            } else {
                res.status(500).json({message:"Password incorrect"})
            }
        })
     }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
     })
}