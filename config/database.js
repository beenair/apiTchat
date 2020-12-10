const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tchat',
  password : 'tchat',
  database : 'tchat'
});
 
connection.connect();


module.exports = connection