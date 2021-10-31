const express = require('express');
const router = express.Router();
const con = require('../../database/db')

router.get('/category', (req, res) => {
    con.query('SELECT * from category', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/category/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * from category where id_category = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;