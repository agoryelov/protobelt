//const casino = require('./casino')

class SocketIO {
	constructor(server) {
		this.io = require('socket.io')(server)
		this.io.on('connection', () => console.log('user connected'))
	}
}

function init(server) {
	return new SocketIO(server)
}

module.exports = init