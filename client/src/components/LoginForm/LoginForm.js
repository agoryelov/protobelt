import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from 'state/ducks/auth'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

function LoginForm(props) {
  const { toggleLogin, dispatch } = props

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const loginClick = (e) => {
    e.preventDefault()

    dispatch(login({ username, password }))
  }

  const signUpClick = (e) => {
    e.preventDefault()
    toggleLogin(false)
  }

  return (
    <Box component={Grid} container direction="column" alignItems="center">
      <Typography component={Box} pb={3} align="center" variant="h4" color="primary">
          Sign in
      </Typography>
      <Box component={Grid} item width="100%" pb={4} pt={2}>
        <TextField fullWidth label="Username" variant="outlined" onChange={e => setUsername(e.target.value)}></TextField>
      </Box>
      <Box component={Grid} item width="100%" pb={4}>
        <TextField fullWidth label="Password" variant="outlined" type="password" onChange={e => setPassword(e.target.value)}></TextField>
      </Box>
      <Box component={Grid} item width="100%" pb={2}>
        <Button fullWidth variant="contained" color="primary" size="large" onClick={loginClick}>Login</Button>
      </Box>
      <Box component={Grid} item width="100%">
        <Button fullWidth variant="contained" size="medium" onClick={signUpClick}>Sign up</Button>
      </Box>
    </Box>
  )
}

export default connect(state => state.auth)(LoginForm)