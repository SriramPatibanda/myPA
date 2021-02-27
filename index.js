const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix,token} = require("./config.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message =>   {
  if (message.content.startsWith(`${prefix}mypa`)) {
    message.channel.send('Pong!');
  }
});

client.login(token);