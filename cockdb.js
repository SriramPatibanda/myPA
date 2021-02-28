const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require("fs");
const { username, password } = require("./config.json");

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username,
  password,
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  database: "ragged-bison-977.bank",
  port: 26257,
  dialectOptions: {
    ssl: {
      //   rejectUnauthorized: false,
      // For secure connection:
      ca: fs.readFileSync("./certs/cc-ca.crt").toString(),
    },
  },
  logging: false,
});
// Define the Account model for the "accounts" table.
const Task = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    taskID: {
      type: Sequelize.UUID,
    },
    assignor: {
        type: Sequelize.STRING,
    },
    assignee: {
        type: Sequelize.STRING,
    },
    task: {
        type: Sequelize.STRING,
    }
  });

  // Task.sync()
  //   .then(function () {
  //     // Insert two rows into the "accounts" table.
  //     return Task.bulkCreate([
  //       {
           
  //           taskID: "815654ce-7999-11eb-9439-0242ac130002",
  //           assignee: "598921289260073012",
  //           assignor: "598921289260073012",
  //           task:"blah23456789"
  //       }
  //     ]);
  //   })
  //   .then(function () {
  //     // Retrieve accounts.
  //     return Task.findAll();
  //   })
  //   .then(function (accounts) {
  //     // Print out the balances.
  //     accounts.forEach(function (account) {
  //       console.log(account.task + " " + account.assignee);
  //     });
  //   })
  //   .catch(function (err) {
  //     console.error("error: " + err.message);
  //     process.exit(1);
  //   });

module.exports = Task;
