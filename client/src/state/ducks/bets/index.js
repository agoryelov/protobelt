const initBets = {
    isPlaced: false,
    isBetting: false,
    totals: [0, 0, 0, 0, 0],
    timeStarted : 0,
    bettingInterval : 0,
    revealedAnswer : '',
    videoSrc: 'bTqVqk7FSmY'
}

/* REDUCER */

export function bets(state = initBets, action) {
    switch (action.type) {
        case PLACE_BET:
            return {...state, isPlaced: true }
        case UPDATE_BETS:
            return { ...state, totals : action.totals}
        case START_BETTING:
            return { ...state,
                isPlaced: false, 
                isBetting : true, 
                timeStarted : action.timeStarted,
                videoSrc : action.videoSrc,
                bettingInterval : action.bettingInterval,
                revealedAnswer: '' }
        case STOP_BETTING:
            return { ...state, isBetting : false}
        case REVEAL_ANSWER:
            return { ...state, revealedAnswer : action.answer}
        case HYDRATE:
            return { ...state, 
                isBetting : true, 
                timeStarted : action.timeStarted,
                bettingInterval : action.bettingInterval,
                videoSrc : action.videoSrc,
                totals : action.totals, 
                revealAnswer : action.answer }
        default:
            return state
    }
}

/* ACTIONS */

export const PLACE_BET = 'PLACE_BET'
export const UPDATE_BETS = 'UPDATE_BETS'
export const START_BETTING = 'START_BETTING'
export const STOP_BETTING = 'STOP_BETTING'
export const REVEAL_ANSWER = 'REVEAL_ANSWER'
export const HYDRATE = 'HYDRATE'

export function placeBet() {
    return { type: PLACE_BET }
}

export function updateBets(totals) {
    return { type: UPDATE_BETS, totals }
}

export function startBetting(timeStarted, bettingInterval, videoSrc) {
    return { type: START_BETTING, timeStarted, bettingInterval, videoSrc}
}

export function stopBetting() {
    return { type: STOP_BETTING }
}

export function revealAnswer(answer) {
    return { type: REVEAL_ANSWER, answer }
}

export function hydrate(isBetting, timeStarted, bettingInterval, totals, answer, videoSrc) {
    return { type: HYDRATE, isBetting, timeStarted, bettingInterval, totals, answer, videoSrc }
}
