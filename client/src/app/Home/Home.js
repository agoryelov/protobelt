import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Replay from 'features/Replay'
import BetForm from 'features/BetForm'
import Odds from 'features/Odds'
import PieTimer from 'features/PieTimer'

function Home() {
  return (
    <Box component={Grid} container justify="center">
      <Box component={Grid} container item md={12} lg={10} xl={9}>
        <Box component={Grid} item xs={12} md={6} p={4} >
          <Box height={400} width={1}>
            <PieTimer />
          </Box>
        </Box>
        <Box component={Grid} item xs={12} md={6} p={4} >
          <Box component={Paper} height={340} width={1}>
            <Replay />
          </Box>
          <Box component="div" height={60} width={1}>
            <BetForm />
          </Box>
        </Box>
        <Box component={Grid} item xs={12} md={6} p={4}>
          <Box component={Paper} height={300} width={1}>
            <Odds />
          </Box>
        </Box>
        <Box component={Grid} item xs={12} md={6} p={4}>
          <Box component={Paper} height={300} width={1}>
            {/* <PieChart /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home