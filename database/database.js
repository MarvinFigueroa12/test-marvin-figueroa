const mysql = require('mysql2');
const config = require('../config/config.json');

//Connection
const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

/*var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE easydocs", function (err, result) {
    if (err) throw err;
        console.log("Database created");
    });
});*/

module.exports = pool.promise();