var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1CrazyPassword!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT `item_id`, `product_name`, `price` FROM `products`"), function(err, res) {
    if (err) throw err;
    console.log(res);
    inquiries();
  };
  connection.end(); // said there's a better place for this
};

// Inquirer

function inquiries() {
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "What is the item_id of the item you would like to buy?",
        name: "itemId"
      },
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      },
      // Here we create a basic password-protected text prompt.
      {
        type: "password",
        message: "Set your password",
        name: "password"
      },
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      },
      // Here we give the user a list to choose from.
      {
        type: "list",
        message: "Which Pokemon do you choose?",
        choices: ["Bulbasaur", "Squirtle", "Charmander"],
        name: "pokemon"
      },
      // Here we ask the user to confirm.
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  })
};