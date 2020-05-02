import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'
import Box from '@material-ui/core/Box'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Avatar from '@material-ui/core/Avatar'

import DiamondIcon from './icons/Emblem_Diamond.png'
import PlatinumIcon from './icons/Emblem_Platinum.png'
import GoldIcon from './icons/Emblem_Gold.png'
import SilverIcon from './icons/Emblem_Silver.png'
import BronzeIcon from './icons/Emblem_Bronze.png'

import CoinIcon from 'resources/coin.png'

import CountUp from 'react-countup'

const Row = styled(TableRow)`
    height: 60px;
    padding: 0;
`

const RankCell = styled(TableCell)`
    width: 15%;
    padding: 0;
    background-color: rgba(0, 0, 0, .1);
`

const RankIcon = styled(Avatar)`
    margin: 0 auto;
    width: 35px;
    height: 40px;
`

const data = [
    { name: "diamond", oddsColor: "rgba(88,167,255,0.5)", icon: DiamondIcon },
    { name: "platinum", oddsColor: "rgba(0,153,144,0.75)", icon: PlatinumIcon },
    { name: "gold", oddsColor: "rgba(255,202,77,0.75)", icon: GoldIcon },
    { name: "silver", oddsColor: "rgba(217,217,217,0.75)", icon: SilverIcon },
    { name: "bronze", oddsColor: "rgba(217,112,0,0.60)", icon: BronzeIcon }
]
const answers = {"diamond" : 0, "platinum" : 1, "gold" : 2, "silver" : 3, "bronze": 4}
function Odds(props) {
    const { amounts, revealedAnswer } = props

    const [totals, setTotals] = useState([...amounts])
    const [odds, setOdds] = useState([0, 0, 0, 0, 0])
    const [textColor, setTextColor] = useState('rgba(230,229,232,1)')

    useEffect(() => {
        if (revealedAnswer !== '') return
        setTotals([...amounts])

        let total = (amounts[0] + amounts[1] + amounts[2] + amounts[3] + amounts[4])
        let newOdds = [...amounts]

        for (let index in newOdds) newOdds[index] = newOdds[index] / total * 100

        setOdds(newOdds)
    }, [amounts, revealedAnswer])

    useEffect(() => {
        let newTotals = [...amounts]

        if (revealedAnswer === '') {
            setTextColor('rgba(230,229,232,1)')
            setTotals([...newTotals])
        } else {
            
            let total = (amounts[0] + amounts[1] + amounts[2] + amounts[3] + amounts[4])
            let answerIndex = answers[revealedAnswer]
            newTotals[answerIndex] = total
    
            setTextColor('rgba(230,229,232,0.4)')
            setTotals([...newTotals])
        }
    }, [revealedAnswer])

    return (
        <Box>
            <Table variant="outlined">
                <TableBody>
                    {odds.map((rankOdds, index) =>
                        <Row key={index} hover>
                            <RankCell align="center">
                                <RankIcon alt="Diamond" src={data[index].icon} />
                            </RankCell>
                            <TableCell align="left">
                                <Box color={data[index].oddsColor} fontSize={15} fontFamily="'Lato', sans-serif">
                                    <CountUp duration={1} end={rankOdds} start={0.00} decimals={2} preserveValue />%
                                </Box>
                            </TableCell>
                            <TableCell align="right">
                                <Box fontSize={18} fontFamily="'Lato', sans-serif" color={revealedAnswer === data[index].name ? "#4caf50" : textColor}>
                                    <img alt="poro" src={CoinIcon} height="15px" /> <CountUp duration={2.5} end={totals[index]} start={0} preserveValue />
                                </Box>
                            </TableCell>
                        </Row>
                    )}
                </TableBody>
            </Table>
        </Box>
    )
}

function mapStateToProps(state) {
    const { bets } = state
    return {
        amounts: bets.totals,
        revealedAnswer: bets.revealedAnswer
    }
}

export default connect(mapStateToProps)(Odds)
