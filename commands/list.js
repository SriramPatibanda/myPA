const Task = require("../cockdb");
const Discord = require("discord.js");
module.exports = {
  name: "list",
  description: "Lists all tasks",
  execute(message, args) {
    Task.sync()
      .then(function () {
        return Task.findAll();
      })
      .then((tasks) => {
        tasks.forEach(function (task) {
          console.log(task.task + " " + task.assignee);
        });
      });
    +assignee.id;
    const youValue = tasks[0].map;
    message.reply("**Tasks for you**");
    tasks[1].map(async (task) => {
      await message.reply(`${task.desc} - ${task.who}`);
    });
    message.reply("**Tasks by you**");
    tasks[0].map(async (task) => {
      await message.reply(`${task.desc} - ${task.who}`);
    });
  },
};
