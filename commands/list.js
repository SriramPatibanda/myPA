const Task=require("../cockdb")
const Discord = require('discord.js');
module.exports = {
	name: 'list',
	description: 'Lists all tasks',
	execute(message, args) {
		Task.sync()
			.then(()=> Task.findAll())
			.then(tasks => {
				message.reply("**Tasks for you**")				
				tasks.map(async (task) => {
					await message.reply(`${task.assignor} - ${task.assignee}`)
				})				
			})
			.then(() => Task.findAll())
			.then(tasks => {
				message.reply("**Tasks by you**")
				tasks[0].map(async (task) => {
					await message.reply(`${task.assignor} - ${task.assignee}`)
				})
			})
		},
};