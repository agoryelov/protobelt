const jwt = require('jsonwebtoken')

const HttpStatus = require('../HttpStatus')
const config = require('../config')

function getTokenFromHeaders(req) {
    const token = req.headers['authorization'] || req.headers['x-access-token']
    return token
}

function validateToken(req, res, next) {
    const token = getTokenFromHeaders(req)

    if (token) {
        jwt.verify(token, config.JWTSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.',
                })
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(HttpStatus.forbidden).send({
            success: false,
            message: 'No token provided.',
        })
    }
}

module.exports = validateToken