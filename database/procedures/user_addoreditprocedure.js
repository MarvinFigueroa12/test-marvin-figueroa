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
    var sql = "CREATE PROCEDURE userAddorEdit (IN _id INT(11), IN _username VARCHAR(40)) BEGIN IF _id = 0 THEN INSERT INTO users (username) VALUES (_username); ELSE UPDATE users SET username = _username WHERE id_user = _id; END IF; SELECT _id AS id_user; END";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Procedure addoredituser created");
    });
});