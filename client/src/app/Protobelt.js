import React from 'react'


import Header from 'components/Header'
import Routes from './Routes'

import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider, Box } from '@material-ui/core'
import theme from 'themes'

function Protobelt() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="background.default" color="text.primary">
        <Header />
          <Routes />
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  )
}

export default Protobelt