const Discord = require('discord.js');

tasks = [[{
			desc: "brush teeth",
			who: "sriram"
		},{
			desc: "eat laddo",
			who: "chinmoi"
		}], [{
			desc: "take bath",
			who: "harish"
		},{
			desc: "phorget",
			who: "abel"
		},{
			desc: "phorget",
			who: "abel"
		},{
			desc: "phorget",
			who: "abel"
		}]]

module.exports = {
	name: 'list',
	description: 'Lists all tasks',
	execute(message, args) {
		const youValue= tasks[0].map		
		message.reply("**Tasks for you**")
		tasks[1].map(async (task) => {
			await message.reply(`${task.desc} - ${task.who}`)
		})
		message.reply("**Tasks by you**")
		tasks[0].map(async (task) => {
			await message.reply(`${task.desc} - ${task.who}`)
		})
		
		
	},
};