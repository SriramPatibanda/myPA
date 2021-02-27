module.exports = {
	name: 'assign',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};