const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
});

client.token(config.token);