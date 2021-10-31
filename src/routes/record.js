const express = require('express');
const router = express.Router();
const con = require('../../database/db')

//Get all records
router.get('/record', (req, res) => {
    con.query('SELECT * from record', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Get a record
router.get('/record/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * from record where id_record = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});
module.exports = router;