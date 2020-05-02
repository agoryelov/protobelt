import React, { useState, useEffect } from 'react'

import axios from "axios"
import { connect } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

import { updateWorth, getWorth } from 'state/ducks/auth'
import axiosWithAuth from 'state/interceptor'

import CoinIcon from 'resources/coin.png'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function BetForm(props) {
  const { isPlaced, isBetting, isAuthenticated, dispatch } = props

  const [amount, setAmount] = useState('')
  const [rank, setRank] = useState('')
  const [disabled, setDisabled] = useState(isPlaced)

  const [successMessage, setSuccessMessage] = useState('')
  const [successOpen, setSuccessOpen] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const [errorOpen, setErrorOpen] = useState(false)

  const handlePlaceBet = (e) => {
    e.preventDefault()

    if (!amount || isNaN(amount)) {
      setErrorMessage('Please select valid bet amount')
      setErrorOpen(true)
      return
    }

    if (!rank) {
      setErrorMessage('Please select rank')
      setErrorOpen(true)
      return
    }

    axiosWithAuth.post("/api/bet/place", { amount, pick: rank })
      .then((response) => {
        setSuccessMessage(`You placed $ ${amount} on ${capitalize(rank)}`)
        setSuccessOpen(true)
        setDisabled(true)
        dispatch(updateWorth(response.data.newWorth))
      })
      .catch(() => {
        setErrorMessage('Unable to place bet')
        setErrorOpen(true)
      })
      .then(() => {
        setAmount('')
        setRank('')
      })
  }

  useEffect(() => {
    if (isPlaced || (!isBetting) || (!isAuthenticated)) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [isPlaced, isBetting])

  useEffect(() => {
    dispatch(getWorth())
  }, [isBetting])

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={3}>
      <TextField style={{ width: '170px' }} label="Bet amount" variant="outlined" size="small" value={amount} onChange={e => setAmount(e.target.value)}
            InputProps={{ startAdornment: (<InputAdornment position="start"><img alt="poro" src={CoinIcon} height="15px" /></InputAdornment>) }} />
      <Box mx={2}>
        <TextField style={{ width: '125px' }} select label="Rank tier" variant="outlined" size="small" value={rank} onChange={e => setRank(e.target.value)} 
            SelectProps={{ MenuProps: { anchorOrigin: { vertical: "bottom", horizontal: "left" }, getContentAnchorEl: null } }} >
          <MenuItem value={"diamond"}>Diamond</MenuItem>
          <MenuItem value={"platinum"}>Platinum</MenuItem>
          <MenuItem value={"gold"}>Gold</MenuItem>
          <MenuItem value={"silver"}>Silver</MenuItem>
          <MenuItem value={"bronze"}>Bronze</MenuItem>
        </TextField>
      </Box>

      <Button variant="contained" disabled={disabled} onClick={handlePlaceBet}>Place</Button>

      <Snackbar open={successOpen} autoHideDuration={6000} onClose={() => setSuccessOpen(false)}>
        <Alert severity="success">
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={() => setErrorOpen(false)}>
        <Alert severity="warning">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

function mapStateToProps(state) {
  const { bets, auth } = state
  return { isAuthenticated: auth.isAuthenticated, isPlaced: bets.isPlaced, isBetting: bets.isBetting }
}

export default connect(mapStateToProps)(BetForm)
