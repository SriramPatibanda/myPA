const Task = require("../cockdb");
const Discord = require("discord.js");
module.exports = {
	name: 'list',
	description: 'Lists all tasks',
	usage: '#list',
	execute: async (message, args, client) => {
		const authorId= message.author.id
		// const authorId = '598921289260073012'
		// console.log(client.users.fetch(authorId));
		const taskObj = await Task.sync();

		await message.channel.send("Fetching your tasks...");
		let tasks1 = [];
		const myTasks = await Task.findAll({ where: { assignee: authorId } })
		await Promise.all(myTasks.map(async (task) => {				
			const userName = await client.users.fetch(task.dataValues.assignor);
			tasks1.push({ userName: userName, task: task.task })
			return Promise.resolve();
		}))
					
		await message.channel.send("**Tasks for you**");
		tasks1.forEach((task) => {
			message.channel.send(`**${task.userName}** - ${task.task}`)		
		})

		
		let tasks2 = [];
		const myTasks2 = await Task.findAll({ where: { assignor: authorId } })
		await Promise.all(myTasks2.map(async (task) => {				
			const userName = await client.users.fetch(task.dataValues.assignee);
			tasks2.push({ userName: userName, task: task.task })
			return Promise.resolve();
		},),)
					
		await message.channel.send("**Tasks by you**");
		tasks2.forEach((task) => {
			message.channel.send(`- **${task.userName}** - ${task.task}`)
		})
	}
};
