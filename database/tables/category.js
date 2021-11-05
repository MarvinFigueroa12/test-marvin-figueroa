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
    var sql = "CREATE TABLE category (id_category INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, category VARCHAR(20) NOT NULL)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table category created");
    });
});