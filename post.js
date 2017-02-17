const inquirer = require('inquirer');
const mysql = require('mysql');

// var connection = mysql.createConnection ({

// 	host: "localhost",
// 	port: 3306,

// 	user: "root",
	
// 	password: "",
// 	database: "greatBay_DB"

// });
function PostItem (){

	inquirer.prompt([
	{
		type: 'input',
		message: 'what is your item?',
		name: 'itemName'
		
	},
	{
		type: 'input',
		message: 'what category is your item?',
		name: 'category'
	},
	{
		type: 'input',
		message: 'what is your starting bid?(if you do not enter, your starting bid will be 0)',
		name: 'initBid'
	}
	]).then(function(user){
	// // console.log(JSON.stringify(user, null, 2));
	// console.log(user.initBid)
	// console.log(user.itemName)
	// console.log(user.category)
	connection.query('INSERT INTO auctions SET ?', {
		item_name: user.itemName,
		category: user.category,
		starting_bid: user.initBid
	})

});
}

module.exports = {PostItem}
