import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import LoginForm from 'components/LoginForm'

import { navigate } from "@reach/router"
import SignUpForm from '../../components/SignUpForm'

import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

import { dismissError } from '../../state/ducks/auth'

function Auth(props) {
  const { isAuthenticated, errorMessage, dispatch } = props

  const [errorOpen, setErrorOpen] = useState(false)
  const [isLogin, toggleLogin] = useState(true)

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  })

  useEffect(() => {
    if (errorMessage) {
      setErrorOpen(true)
    } else setErrorOpen(false)
  }, [errorMessage])

  const closeErrorMessage = () => {
    if (errorOpen) {
      setErrorOpen(false)
      dispatch(dismissError())
    }
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={1}>
      <Box component={Paper} p={6} width={400} elevation={3}>
        {isLogin ? <LoginForm toggleLogin={toggleLogin} /> :
                    <SignUpForm toggleLogin={toggleLogin} />}
      </Box>
      <Snackbar open={errorOpen} autoHideDuration={5000} onClose={closeErrorMessage}>
        <Alert severity="warning">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    errorMessage: auth.errorMessage,
    isAuthenticated: auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Auth)