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
    var sql = "CREATE TABLE documents (id_document INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, document_name VARCHAR(200) NOT NULL, url VARCHAR(100) NOT NULL, date_of_creation DATE NOT NULL, id_user INT(11), content VARCHAR(400), CONSTRAINT FK_idUser FOREIGN KEY (id_user) REFERENCES users(id_user), id_category INT(11), CONSTRAINT FK_idCategory FOREIGN KEY (id_category) REFERENCES category(id_category))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table documents created");
    });
});