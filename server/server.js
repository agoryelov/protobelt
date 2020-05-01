const express       = require('express')
const app           = express()

const bodyParser    = require('body-parser')
const cors          = require('cors')
const validate      = require('./middleware/validate')
const limit         = require('./middleware/limit')
const database      = require('./database')

const path          = require('path')
const server        = require('http').createServer(app)
const socket        = require('./casino/socket')(server)
const casino        = require('./casino/casino')(socket)

const { routerProtected, routerUnprotected } = require('./routes')

app.set('casino', casino)

app.use(express.static(path.join(__dirname, '../build')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(limit)

app.use('/', routerUnprotected)
app.use('/', validate, routerProtected)

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

server.listen(8000, () => console.log('Server running on port 8000'))

casino.startGame()
casino.simulateBets(2000)
