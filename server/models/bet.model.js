const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bet = new Schema(
    {
        pick: { type: String, required: true },
        amount: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('bet', Bet)