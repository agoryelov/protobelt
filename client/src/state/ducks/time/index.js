import Timer from 'easytimer.js'

const initTime = {
    active : false,
    timeStarted : 0,
    timeRemaining : 0,
    percentRemaining : 0,
    bettingInterval : 0
}

/* REDUCER */

export function time(state = initTime, action) {
    switch (action.type) {
        case UPDATE_BETS:
            return { ...state, totals : action.totals}
        case START_BETTING:
            return { ...state, 
                isBetting : true, 
                timeStarted : action.timeStarted,
                bettingInterval : action.bettingInterval }
        case STOP_BETTING:
            return { ...state, isBetting : false}
        case REVEAL_ANSWER:
            return { ...state, revealAnswer : action.answer}
        default:
            return state
    }
}

/* ACTIONS */

export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const SET_INTERVAL = 'SET_INTERVAL'
export const UPDATE_TIMES = 'UPDATE_TIMES'

export function startTimer() {
    return { type: UPDATE_BETS }
}

export function stopTimer() {
    return { type: START_BETTING }
}

export function updateInterval(bettingInterval) {
    return { type: STOP_BETTING, bettingInterval }
}

export function updateTimes(timeStarted, timeRemaining, percentRemaining) {
    return { type: REVEAL_ANSWER, timeStarted, timeRemaining, percentRemaining }
}




timer.addEventListener('secondsUpdated', (e) => {

})

// function start