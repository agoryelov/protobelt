const mongoose = require('mongoose')
const config = require('../config')

mongoose
    .connect('mongodb://127.0.0.1:27017/protobelt', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db