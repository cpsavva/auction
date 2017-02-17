const mysql = require('mysql');
const inquirer = require('inquirer');
const post = require("./post.js");
const bid = require("./bid.js")

var connection = mysql.createConnection ({

	host: "localhost",
	port: 3306,

	user: "root",
	
	password: "",
	database: "greatBay_DB"

});

function bidPost(){
	inquirer.prompt([
	{
		type: "checkbox",
		message:"whatcha doing today?",
		choices: ["post", "bid"],
		name: "intro"
	}
		]).then(handleChoice);
}; 


function handleChoice(bpAns){
		console.log(JSON.stringify(bpAns, null, 2));
console.log(bpAns.intro[0]);

		switch (bpAns.intro[0]) {
			case 'post':
				//post.function;
				break;
			case 'bid':
				//bid.function;
				break;
			default:
				console.log("you might want to try that again")

		}
	
}

bidPost();