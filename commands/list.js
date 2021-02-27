module.exports = {
	name: 'list',
	description: 'Ping!',
	execute(message, args) {
		message.reply(`Listing for ${message.author.tag}!`);
	},
};