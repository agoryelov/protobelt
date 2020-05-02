/* Intervals in ms */

const INTERVALS = {
    bettingTime : (120 * 1000), // 2 mins
    bufferTime : 4000, // 4 sec
    processTime : 10000  // 10 sec
}

const TIERS = ["diamond", "platinum", "gold", "silver", "bronze"]

const DEFAULT_CASINO = {
    isBetting: false,
    timeStarted: 0,
    revealed: ''
}

const DEFAULT_BETS = {
    players: new Set(),
    entries: [],
    totals: [0, 0, 0, 0, 0],
    loseTotal: 0,
    winTotal: 0
}

const SAMPLE_PICKS = [
    {videoSrc : "yus2kjLVTLU", answer : "diamond"},     //zven
    {videoSrc : "PDjJxM7L2hg", answer : "diamond"},     //baldi sett
    {videoSrc : "AdturONgwuY", answer : "diamond"},     //baldi graves
    {videoSrc : "n96DLaNaiQg", answer : "platinum"},    //my ezreal quad
    {videoSrc : "RAgF1N7Z5io", answer : "platinum"},    //my vayne plays
    {videoSrc : "tFZd8flHZp8", answer : "gold"},        //gurper ekko
    {videoSrc : "5fXgYGqa78Y", answer : "gold"},        //gurper cass
    {videoSrc : "XyZTwUFLQ4A", answer : "gold"},        //gurper syndra
    {videoSrc : "h9hsLCj21us", answer : "gold"},        //gurper syndra
    {videoSrc : "MCtQvoOjs1A", answer : "silver"},
    {videoSrc : "wD4WpX_bNcQ", answer : "bronze"},
]

module.exports = {
    INTERVALS,
    TIERS,
    DEFAULT_CASINO,
    DEFAULT_BETS,
    SAMPLE_PICKS
}