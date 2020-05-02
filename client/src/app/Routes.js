import React from 'react'
import { Router } from "@reach/router"

import Home from './Home'
import Profile from './Profile'
import Auth from './Auth'
import NotFound from './NotFound'

import styled from 'styled-components'

const ContentRouter = styled(Router)`
  height: calc(100vh - 75px);
  overflow-x: hidden;
  padding: 30px;
  box-sizing: border-box;
`

function Routes() {
    return (
        <ContentRouter>
            <Home path="/" />
            <Profile path="/me" />
            <Auth path="/login" />
            <NotFound default />
        </ContentRouter>
    )
}

export default Routes