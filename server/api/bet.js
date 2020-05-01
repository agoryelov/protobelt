const User = require('../models/user.model')
const HttpStatus = require('../HttpStatus')

requestPlaceBet = (req, res) => {
    const casino = req.app.get('casino')
    const body = req.body
    const jwt = req.decoded

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a bet',
        })
    }

    const bet = {...body, user: jwt.user}

    casino.placeBet(bet).then((result) => {
        res.status(HttpStatus.OK).json(result)
    }, (error) => {
        res.status(HttpStatus.badRequest).json(error)
    })
}

requestMyWorth = (req, res) => {
    const jwt = req.decoded

    User.findOne({ "_id" : jwt.user }).then((user, err) => {        
        if (err) {
            return res.status(400).json({
                success: false,
                error: 'User not found',
            })
        }

        return res.status(200).json({
            success: true,
            worth: user.worth
        })
    })
}

module.exports = {
    requestPlaceBet,
    requestMyWorth
}