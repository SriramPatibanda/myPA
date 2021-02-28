const Task=require("../cockdb")

module.exports = {
	name: 'list',
	description: 'Ping!',
	execute(message, args) {
		Task.sync()
		.then(function () {			
			return Task.findAll();
		})
		.then((tasks) => {
			tasks.forEach(function (task) {
				console.log(task.task + " " + task.assignee);
			});
		})
	},
};