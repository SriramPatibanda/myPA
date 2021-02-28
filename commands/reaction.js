// const Discord = require('discord.js');
// const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

// client.on('ready', () => {
//     console.log("Ready!");
// })
// client.on('messageReactionAdd', async (reaction, user) => {
// 	// When we receive a reaction we check if the reaction is partial or not
// 	if (reaction.partial) {
// 		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
// 		try {
// 			await reaction.fetch();
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message: ', error);
// 			// Return as `reaction.message.author` may be undefined/null
// 			return;
// 		}
//     }
// 	// Now the message has been cached and is fully available
//     // console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
//     reaction.message.react('👍').then(() => reaction.message.react('👎'));

//     // const filter = (reaction, user) => {
//     //     return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
//     // };
//     console.log(reaction.count,reaction.emoji.name)
// 	// The reaction is now also fully available and the properties will be reflected accurately:
// 	// console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
// });

// client.login("ODE1MDkwNjIyNzU4MTI1NTg4.YDnWTA.VstdQjN6JeYkmapzh79Jw5a8Rgk");
