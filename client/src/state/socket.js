import io from 'socket.io-client';
import { updateBets, startBetting, stopBetting, revealAnswer, hydrate } from './ducks/bets'

function createEvents(dispatch) {
    const socket = io()

    socket.on('hydrate', (data) => {
        dispatch(hydrate(data.isBetting, data.timeStarted, data.bettingInterval, data.totals, data.revealedAnswer, data.videoSrc))
    })

    socket.on('newBet', (data) => {
        dispatch(updateBets(data))
    })

    socket.on('bettingStarted', (data) => {
        dispatch(startBetting(data.timeStarted, data.bettingInterval, data.videoSrc, data.totals))
    })

    socket.on('bettingStopped', () => {
        dispatch(stopBetting())
    })

    socket.on('answerRevealed', (data) => {
        dispatch(revealAnswer(data))
    })
}

export default {
    createEvents
}