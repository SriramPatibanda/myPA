module.exports = {
	name: 'assign',
	description: 'Ping!',
	execute(message, args) {
		// args splits the string into words by default. 
		// assignee is the first word of the argument.
		const assignee = args[0];

		const taskDescription = args.join(' ').slice(assignee.length).trim();


		console.log(assignee);
		console.log(taskDescription);
	},
};