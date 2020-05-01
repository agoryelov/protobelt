var _ = require('lodash');

const { getWinners, addBet, removeAmountFromUser, addAmountToUser } = require('./helpers')
const { TIERS, INTERVALS, DEFAULT_CASINO, DEFAULT_BETS, SAMPLE_PICKS } = require('./constants')
const { bettingTime, bufferTime, processTime } = INTERVALS

/* CASINO STATE VARIABLES */

const adapters = { socket : null }

const picks = {
    future : [...SAMPLE_PICKS],
    past : []
}

const state = {
    pick : {},
    casino : {},
    bets : {},
    gameLoopInterval : null
}

picks.future = _.shuffle(picks.future)
state.casino = _.cloneDeep(DEFAULT_CASINO)
state.bets = _.cloneDeep(DEFAULT_BETS)




/* CASINO INIT */

function init(socketio) {
    adapters.socket = socketio.io

    adapters.socket.on('connection', (socket) => {
        let publicBetsInfo = _.pick(state.bets, ['totals'])
        let publicCasinoInfo = _.pick(state.casino, ['isBetting', 'timeStarted', 'revealed'])
        let publicPickInfo = _.pick(state.pick, ['videoSrc'])

        socket.emit('hydrate', { ...publicBetsInfo, ...publicCasinoInfo, ...publicPickInfo, bettingInterval: bettingTime})
    })

    return { placeBet, startGame, stopGame, simulateBets }
}


/* GAME LOOP */

function gameLoop() {
    startBets()
    setTimeout(stopBets, bettingTime)
    setTimeout(processBets, (bettingTime + bufferTime))
}

function startGame() {
    gameLoop()
    state.gameLoopInterval = setInterval(gameLoop, (bettingTime + bufferTime + processTime))
}

function stopGame() {
    clearInterval(state.gameLoopInterval)
}

/* CASINO PHASES */

function startBets() {
    state.casino = _.cloneDeep(DEFAULT_CASINO)
    state.bets = _.cloneDeep(DEFAULT_BETS)

    if (picks.future.length > 0) {
        let pick = picks.future.pop()
        picks.past.push(pick)
        _.assign(state.pick, pick)
    } else {
        picks.future = [...picks.past]
        picks.past = []
        picks.future = _.shuffle(picks.future)
    }

    
    _.assign(state.casino, {isBetting: true, timeStarted: Date.now(), revealed: ''})

    let publicBetsInfo = _.pick(state.bets, ['totals'])
    let publicCasinoInfo = _.pick(state.casino, ['isBetting', 'timeStarted'])
    let publicPickInfo = _.pick(state.pick, ['videoSrc'])
    adapters.socket.emit('bettingStarted', { ...publicCasinoInfo, ...publicBetsInfo, ...publicPickInfo, bettingInterval: bettingTime})
    
    console.log("answer is: " + state.pick.answer)
}

function stopBets() {
    _.assign(state.casino, {isBetting: false, timeStarted: Date.now(), revealed: state.pick.answer})
    adapters.socket.emit('bettingStopped')
}

function processBets() {
    adapters.socket.emit('answerRevealed', state.casino.revealed)
    let winners = getWinners(state.bets.entries, state.pick.answer)

    winners.forEach((winner) => {
        if (winner.user == 'beepboop') return

        let winnings = Math.floor(winner.amount / state.bets.winTotal * state.bets.loseTotal) + parseInt(winner.amount)
        addAmountToUser(winnings, winner.user)
        
    })
}

/* PUBLIC CASINO ACTIONS */

function placeBet(bet) {
    let { user, amount } = bet

    return new Promise((resolve, reject) => {
        if (!state.casino.isBetting) {
            reject({ success: false, message: "not betting" })
            return
        }

        if (state.bets.players.has(user) && user != 'beepboop') {
            reject({ success: false, message: "already placed bet" })
            return
        }

        removeAmountFromUser(amount, user).then((result) => {
            addBet(state, bet)
            adapters.socket.emit('newBet', [...state.bets.totals])
            resolve(result)
        }, (error) => {
            reject(error)
        })
    })
}

function simulateBets(interval) {
    setInterval(() => {
        let randomAmount = Math.floor(Math.random() * 200) + 5
        let amountRounded = Math.ceil(randomAmount / 5) * 5
        let delay = Math.floor(Math.random() * interval)
        let pick = TIERS[Math.floor(Math.random() * 5)]

        let bet = { user: 'beepboop', amount: amountRounded, pick }
        setTimeout(() => {
            if (state.casino.isBetting) {
                addBet(state, bet)
                adapters.socket.emit('newBet', [...state.bets.totals])
            }
        }, delay)
    }, interval)
}

module.exports = init