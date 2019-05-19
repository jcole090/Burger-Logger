var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3306,
  user     : 'root',
  password : 'Jacl.4561',
  database : 'burgers_db'
});
 
connection.connect(error => {
    if (error) {
        console.log('no connection')
    } else {
        console.log('connection successful')
        
    }
});
 
connection.end();

module.exports = {  connection};