import { combineReducers } from 'redux'

import { auth } from './auth'
import { bets } from './bets'

const reducers = combineReducers({
    auth,
    bets
})

export default reducers