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
    var sql = "CREATE TABLE user_document (id INT(11) NOT NULL PRIMARY KEY, id_user INT(11), CONSTRAINT FK_idUser_document FOREIGN KEY (id_user) REFERENCES users(id_user), id_document INT(11), CONSTRAINT FK_idDocument_user FOREIGN KEY (id_document) REFERENCES documents(id_document))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table user_document created");
    });
});