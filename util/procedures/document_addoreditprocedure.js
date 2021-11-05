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
    var sql = "CREATE DEFINER=`root`@`localhost` PROCEDURE `documentAddorEdit`(IN _id INT(11), IN _content VARCHAR(400)) BEGIN IF _id = 0 THEN INSERT INTO documents (content) VALUES (_content); ELSE UPDATE documents SET content = _content WHERE id_document = _id; UPDATE record SET content = (SELECT concat_ws('\n', record.content, _content) FROM record WHERE _id = record.id_record), edit_date = (SELECT CURDATE()) WHERE id_record = _id ;  END IF; SELECT _id AS id_document; SELECT _id AS id_record; END";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Procedure addoreditdocument created");
    });
});