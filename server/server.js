const express       = require('express')
const app           = express()

const parseArgs     = require('minimist')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const validate      = require('./middleware/validate')
const limit         = require('./middleware/limit')
const database      = require('./database')

const path          = require('path')
const server        = require('http').createServer(app)
const socket        = require('./casino/socket')(server)
const casino        = require('./casino/casino')(socket)

const args = parseArgs(process.argv.slice(2))
const { port = '8000'} = args

const { routerProtected, routerUnprotected } = require('./routes')

app.set('casino', casino)

app.use(express.static(path.join(__dirname, '../build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(limit)

app.use('/api', routerUnprotected)
app.use('/api', validate, routerProtected)

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

casino.startGame()
casino.simulateBets(2000)

server.listen(+port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err.stack);
        return;
    }

    console.log(`Listening on http://127.0.0.1:${port}.`);
})


