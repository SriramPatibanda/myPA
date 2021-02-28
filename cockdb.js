const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
<<<<<<< HEAD
const fs = require("fs");
const { username, password } = require("./config.json");
=======
const fs = require('fs');
const {username,password} = require('./config.json');
>>>>>>> 42f4efb250f9429c23e12ca5a70e54f8e6f8b64a

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username,
  password,
<<<<<<< HEAD
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  database: "ragged-bison-977.bank",
  port: 26257,
  dialectOptions: {
    ssl: {
      //   rejectUnauthorized: false,
      // For secure connection:
      ca: fs.readFileSync("./certs/cc-ca.crt").toString(),
=======
  host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
  database: 'ragged-bison-977.bank',
  port: 26257,  
  dialectOptions: {
    ssl: {
    //   rejectUnauthorized: false,
      // For secure connection:
      ca: fs.readFileSync('./certs/cc-ca.crt')
                .toString()
>>>>>>> 42f4efb250f9429c23e12ca5a70e54f8e6f8b64a
    },
  },
  logging: false,
});
// Define the Account model for the "accounts" table.
const Task = sequelize.define("tasks", {
<<<<<<< HEAD
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
  },
});
=======
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
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
>>>>>>> 42f4efb250f9429c23e12ca5a70e54f8e6f8b64a

//   // Create the "accounts" table.
//   Task.sync()
//     // .then(function () {
//     //   // Insert two rows into the "accounts" table.
//     //   return Task.bulkCreate([
//     //     {
//     //         id:"815654ce-7999-11eb-9439-0242ac130004",
//     //         taskID: "815654ce-7999-11eb-9439-0242ac130002",
//     //         assignee: "sriram",
//     //         assignor: "harish",
//     //         task:"blah"
//     //     }
//     //   ]);
//     // })
//     .then(function () {
//       // Retrieve accounts.
//       return Task.findAll();
//     })
//     .then(function (accounts) {
//       // Print out the balances.
//       accounts.forEach(function (account) {
//         console.log(account.task + " " + account.assignee);
//       });
//       process.exit(0);
//     })
//     .catch(function (err) {
//       console.error("error: " + err.message);
//       process.exit(1);
//     });

<<<<<<< HEAD
module.exports = Task;
=======
module.exports=Task
>>>>>>> 42f4efb250f9429c23e12ca5a70e54f8e6f8b64a
