const User = require('../models/user.model')
const HttpStatus = require('../HttpStatus')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const config = require('../config')

const EXPIRES_IN_MINUTES = '1440m' // expires in 24 hours

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(HttpStatus.unauthorized).json({
            success: false,
            error: 'You must provide a user'
        })
    }

    User.find({ username: body.username }, (err, docs) => {
        if (docs.length) {
            return res.status(HttpStatus.badRequest).json({
                success: false,
                error: 'User already exists'
            })
        } else {
            const user = new User({...body, "worth": 5000, "isAdmin" : false})

            if (!user) {
                return res.status(HttpStatus.badRequest).json({
                    success: false,
                    error: err
                })
            }

            user.save().then(() => {
                const payload = { user: user._id }
                const token = jwt.sign(payload, config.JWTSecret, { expiresIn: EXPIRES_IN_MINUTES })

                user.password = undefined

                res.status(HttpStatus.created).json({
                    success: true,
                    user: user,
                    token: token,
                    message: 'User created'
                })
            }).catch(error => {
                res.status(HttpStatus.badRequest).json({
                    success: false,
                    error: error, 
                    message: 'User not created'
                })
            })
        }
    })
}

authUser = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ username: username }).then((user, err) => {
        if (err) {
            return res.status(HttpStatus.badRequest).json({
                success: false,
                message: err
            })
        }

        if (!user) {
            return res.status(HttpStatus.notFound).json({
                success: false,
                message: 'Username not found'
            })
        }
        
        bcrypt.compare(password, user.password, (err, result) => {
            if (result === true) {
                const payload = { user: user._id }
                const token = jwt.sign(payload, config.JWTSecret, { expiresIn: EXPIRES_IN_MINUTES })

                user.password = undefined

                return res.status(HttpStatus.OK).json({
                    success: true,
                    user: user,
                    token: token,
                    message: 'User authenicated'
                })
            } else {
                return res.status(HttpStatus.notAcceptable).json({
                    success: false,
                    message: 'Password does not match',
                })
            }
        })
    })
}

module.exports = {
    createUser,
    authUser
}