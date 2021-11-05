var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "easydocs"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE users (id_user INT(11) NOT NULL PRIMARY KEY, username VARCHAR(40) NOT NULL)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table users created");
    });
});