const User = require('../models/user.model')
const { TIERS } = require('./constants')

/* CASINO STATE HELPERS */

function addBet(state, bet) {

    //extra check fake bets 'beepboop'
    if (!state.casino.isBetting) return
    console.log(`${bet.user} placed ${bet.amount} shekels on ${bet.pick}`)

    let { user, amount, pick } = bet

    let pickIndex = TIERS.indexOf(pick)
    state.bets.players.add(user)
    state.bets.entries.push(bet)
    state.bets.totals[pickIndex] += parseInt(amount)

    if (pick === state.pick.answer) state.bets.winTotal += parseInt(amount)
    else state.bets.loseTotal += parseInt(amount)
}

function getWinners(entries, answer) {
    let winners = []

    entries.forEach((entry) => {
        if (entry.pick === answer) winners.push(entry)
    })

    return winners
}

/* CASINO DATABASE HELPERS */

function removeAmountFromUser(amount, uid) {
    return new Promise((resolve, reject) => {
        User.findById(uid, (err, doc) => {
            if (err) {
                reject({ success: false, message: "database error" })
                return
            } else if (doc.worth < amount) {
                reject({ success: false, message: "not enough shekels" })
                return
            } else {
                doc.worth -= parseInt(amount)
                doc.save()

                resolve({ success: true, newWorth: doc.worth })
            }
        })
    })
}

function addAmountToUser(amount, uid) {
    User.findByIdAndUpdate(uid, { $inc: { worth: amount }}, { new: true}, (err, docs) => {
        console.log(`${docs.username} was awarded ${amount} shekels`)
    })
}

module.exports = {
    getWinners,
    addBet,
    removeAmountFromUser,
    addAmountToUser
}