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
    var sql = "CREATE DEFINER=`root`@`localhost` PROCEDURE `categoryAddorEdit`(IN _id INT(11), IN _category VARCHAR(20)) BEGIN IF _id = 0 THEN INSERT INTO category (category) VALUES (_category); ELSE UPDATE category SET category = _category WHERE id_category = _id; END IF; SELECT _id AS id_category; END";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Procedure addoreditcategory created");
    });
});