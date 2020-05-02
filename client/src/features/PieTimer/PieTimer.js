import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Timer from 'easytimer.js'

import {VictoryPie, VictoryLabel } from 'victory'
import Box from '@material-ui/core/Box'

const timer = new Timer()
const answers = {"diamond" : 0, "platinum" : 1, "gold" : 2, "silver" : 3, "bronze": 4}

function PieTimer(props) {
    const { totals, revealedAnswer, isBetting, timeStarted, bettingInterval  } = props

    const [pieData, setPieData] = useState([5,5,5,5,5])

    useEffect(() => {
        if (revealedAnswer) {
            setSecondsRemaining(bettingInterval / 1000)
            let answerIndex = answers[revealedAnswer]
            let revealData = [0, 0, 0, 0, 0]
            revealData[answerIndex] = 100
            setPieData([...revealData])
        }
    }, [revealedAnswer])

    useEffect(() => {
        if (revealedAnswer !== '') return
        let percents = getPercents(totals)
        setPieData([...percents])
    }, [totals])

    const [secondsRemaining, setSecondsRemaining] = useState(bettingInterval / 1000)

    const updateSeconds = (e) => {
        let remaining = e.detail.timer.getTotalTimeValues().seconds
        setSecondsRemaining(remaining)
    }
    
    useEffect(() => {
        if (isBetting) {
            timer.start({
                precision: 'seconds',
                startValues: { seconds : (bettingInterval - (Date.now() - timeStarted)) / 1000 },
                countdown: true
            })
            timer.on('secondsUpdated', updateSeconds)
        } else {
            setSecondsRemaining(0)
        }
        return () => {
            timer.off('secondsUpdated', updateSeconds)
        }
    }, [isBetting])

    const renderTimerLabel = (seconds) => {
        return (
            <VictoryLabel textAnchor="middle" verticalAnchor="middle" x={200} y={200} text={`${seconds}s`} style={{ fontSize: 45, fill: '#e6e5e8' }} />
        )
    }

    const renderStatusLabel = (answer) => {
        return (
            <VictoryLabel textAnchor="middle" verticalAnchor="middle" x={200} y={200} text={`${answer.toUpperCase()}`} style={{ fontSize: 40, fill: '#e6e5e8' }} />
        )
    }

    return (
        <Box width={1} height={1}>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
                <VictoryPie padAngle={3} cornerRadius={5} standalone={false} innerRadius={150} radius={200} labels={() => null}  animate={{ duration: 1000 }}
                    colorScale={["#58a7ff", '#00d47f','#ffca4d','#d9d9d9','#d97000']}
                    data={[{ y: pieData[0]},{ y: pieData[1]},{ y: pieData[2]},{ y: pieData[3]},{ y: pieData[4]}]} />

                <VictoryPie standalone={false} radius={125}  innerRadius={115} labels={() => null} animate={{ duration: 1000, easing: 'linear' }}  
                    colorScale={["rgba(200,207,228,.3)", "rgba(200,207,228,1)"]}
                    data={[{ y: (bettingInterval / 1000) - secondsRemaining },{ y: secondsRemaining }]} />

                { revealedAnswer === '' ?  renderTimerLabel(secondsRemaining) : renderStatusLabel(revealedAnswer) }
            </svg>
        </Box>
    )
}

const getPercents = (fullValues) => {
    let totalValue = (fullValues[0] + fullValues[1] + fullValues[2] + fullValues[3] + fullValues[4])
    let percents = [...fullValues]

    for (let index in percents) {
        let percentVal = parseInt(percents[index] / totalValue * 100)
        if (isNaN(percentVal) || percentVal < 5) percents[index] = 5
        else percents[index] = percentVal
    }
    return percents
}

function mapStateToProps(state) {
    const { bets } = state
    return {
        isBetting : bets.isBetting,
        revealedAnswer: bets.revealedAnswer,
        totals: bets.totals,
        timeStarted: bets.timeStarted,
        bettingInterval: bets.bettingInterval
    }
}
export default connect(mapStateToProps)(PieTimer)
