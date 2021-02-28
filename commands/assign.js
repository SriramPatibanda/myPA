const Task = require("../cockdb");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  name: "assign",
  description: "Ping!",
  execute(message, args, client) {
    // args splits the string into words by default.
    // assignee is the first word of the argument.
    const assignee = message.mentions.users.first();

    const assignorID = message.author.id;

    const taskDescription = args.join(" ").slice(assignee.id.length + 4 ).trim();

    const assignorName = client.users.cache.get(assignorID).username;

    client.users.cache
      .get(assignee.id)
      .send(
        assignorName +
          " assigned you the following task :" +
          "\n" +
          taskDescription
      );

    Task.sync()
      .then(function () {
        return Task.bulkCreate([
          {
            taskID: uuidv4(),
            assignee: assignee.id,
            assignor: assignorID,
            task: taskDescription,
          },
        ]);
      })

      .catch(function (err) {
        console.error("error: " + err.message);
        process.exit(1);
      });
  },
};
