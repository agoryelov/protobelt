import React, { useEffect, useState } from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux'
import { logout, getWorth } from 'state/ducks/auth'
import { navigate } from "@reach/router"

import YouTube from '@material-ui/icons/YouTube'
import AccountCircle from '@material-ui/icons/AccountCircle'

import CountUp from 'react-countup'

import styled from 'styled-components'

import CoinIcon from 'resources/coin.png'

export const StyledGrid = styled(Grid)`
    width: 100vw;
    height: 75px;
    padding: 10px;
`
export const StyledHeading = styled.a`
    font-size: 2em;
    cursor: pointer;
`

export const StyledLogoIcon = styled(YouTube)`
    margin-right: 10px;
    margin-left: 30px;
    font-size: 50px;
    cursor: pointer;
`

function HeaderWrapper(props) {

  const { worth, isAuthenticated, dispatch } = props

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getWorth())
  }, [])

  const clickLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  const clickProfile = (e) => {
    e.preventDefault()
    navigate('/me')
  }

  const clickLogin = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  const clickLogo = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const clickAccountCircle = (e) => {
    e.preventDefault()
    setAnchorEl(e.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderLoggedIn = () => {
    return (
      <>
        <Box fontSize={25} mr={3} fontFamily="'Lato', sans-serif">
          <img alt="poro" src={CoinIcon} height="20px" /> <CountUp duration={1.5} end={parseInt(worth)} start={0} preserveValue />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box ml={1}>
          <IconButton onClick={clickAccountCircle}>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Box>
      </>
    )
  }

  const renderNotLoggedIn = () => {
    return (
      <Button size="large" onClick={clickLogin}>Login</Button>
    )
  }

  return (
    <StyledGrid container alignItems="center" justify="space-between" direction="row" component={Paper} square elevation={3}>
      <Box component={Grid} item container alignItems="center" xs={6}>
        <StyledLogoIcon onClick={clickLogo} />
        <StyledHeading onClick={clickLogo}>Protobelt </StyledHeading>
      </Box>
      <Box component={Grid} pr={3} item container alignItems="center" justify="flex-end" xs={6}>
        {isAuthenticated ? renderLoggedIn() : renderNotLoggedIn()}
        <Menu anchorEl={anchorEl} keepMounted open={menuOpen} onClose={handleMenuClose}  >
          <MenuItem onClick={clickProfile}>Profile</MenuItem>
          <MenuItem onClick={clickLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </StyledGrid>
  )
}

function mapStateToProps(state) {
  const { auth } = state
  return { isAuthenticated: auth.isAuthenticated, worth: auth.worth }
}

export default connect(mapStateToProps)(HeaderWrapper)