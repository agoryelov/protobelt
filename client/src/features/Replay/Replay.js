import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Plyr from 'plyr'



function Replay(props) {
    const { currentReplay } = props
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        new Plyr('.js-plyr', options)
    }, [])

    return (
        <Box width={1280} height={720} maxHeight={1} maxWidth={1}>
            <div className="plyr__video-embed js-plyr">
                <iframe
                    title="LoL Replay"
                    src={`https://www.youtube.com/embed/${currentReplay}?origin=http://localhost:3000&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
                    allowFullScreen={true} 
                    allow="autoplay"
                ></iframe>
            </div>
            {/* <video crossOrigin="true" className='js-plyr'></video> */}
        </Box>
    )
}

const options = {
    hideControls: false,
    muted: true,
    quality: { default: 720 },
    loop: { active: true },
    controls: ['play-large', 'play', 'progress', 'volume', 'fullscreen']
}

function mapStateToProps(state) {
    const { bets } = state
    return {
        currentReplay : bets.videoSrc
    }
}


export default connect(mapStateToProps)(Replay)