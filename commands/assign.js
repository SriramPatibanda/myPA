module.exports = {
	name: 'assign',
	description: 'Ping!',
	execute(message, args, client) {
		// args splits the string into words by default. 
		// assignee is the first word of the argument.
		const assignee = message.mentions.users.first();

		const assignor = message.author.id;

		const taskDescription = args.join(' ').slice(assignee.length).trim();

		client.users.cache.get(assignee.id).send(taskDescription);
	},
};