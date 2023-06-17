// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'oracle_dowdv',
    password        : '0164',
    database        : 'TOFUdb'
})

// Export it for use in our application
module.exports.pool = pool;