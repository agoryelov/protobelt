import React from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import { connect } from 'react-redux'

import CatPicture from './cat.png'
import CoinIcon from 'resources/coin.png'

function Profile(props) {
    const { username, worth } = props
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height={1} flexDirection="column">
            <img src={CatPicture} width={100} height="auto" />
            <Box component={Paper} p={6} width={450} elevation={3} textAlign="center" fontSize="25px">
                Hello, <b>{username}</b>! <br /> You have <img src={CoinIcon} height="20px" /> <b>{worth}</b> poros
            </Box>
        </Box>
    )
}

function mapStateToProps(state) {
    const { auth } = state
    return {
        username : auth.username,
        worth : auth.worth
    }
}

export default  connect(mapStateToProps)(Profile)