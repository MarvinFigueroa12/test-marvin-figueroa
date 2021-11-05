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
    var sql = "CREATE TABLE record (id_record INT(11) NOT NULL PRIMARY KEY, edit_date DATE NOT NULL, id_document INT(11), CONSTRAINT FK_idDocument_record FOREIGN KEY (id_document) REFERENCES documents(id_document))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table user_document created");
    });
});