const express = require('express')

const { requestPlaceBet, requestMyWorth } = require('../api/bet')

const router = express.Router()

router.post('/bet/place', requestPlaceBet)
router.get('/bet/worth', requestMyWorth)

module.exports = router