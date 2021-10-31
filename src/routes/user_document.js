const express = require('express');
const router = express.Router();
const con = require('../../database/db')

//Get all records
router.get('/alldocumentsbyuser/:username', (req, res) => {
    const { username } = req.params;
    con.query('SELECT document_name from documents inner join user_document on documents.id_document = user_document.id_document inner join users on user_document.id_user = users.id_user where username = ?',[username], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;