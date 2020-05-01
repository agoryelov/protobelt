require('dotenv').config()

module.exports = {
    serverPort: process.env.SERVER_PORT,
    JWTSecret: process.env.JWT_SECRET || 'helloworldxd'
}