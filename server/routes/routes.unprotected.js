const express = require('express')

const AuthAPI = require('../api/auth')
const BetAPI = require('../api/bet')


const router = express.Router()

router.post('/user/create', AuthAPI.createUser)
router.post('/user/login', AuthAPI.authUser)

module.exports = router