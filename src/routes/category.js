const express = require('express');
const router = express.Router();
const con = require('../../database/db')

//Get all categorys
router.get('/category', (req, res) => {
    con.query('SELECT * from category', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Get a category
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

//Delete a category
router.delete('/category/:id', (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM category WHERE id_categroy = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Category Deleted'});
        } else {
            console.log(err);
        }
    });
});

//Insert a category
router.post('/category', (req, res) => {
    const {id_user, category} = req.body;
    const query = `
        INSERT INTO category (id_category, category) VALUES (?,?);
    `;
    con.query(query, [id_user, category], (err, rows, field) => {
        if(!err){
            res.json({Status: 'Category Saved'});
        } else {
            console.log(err);
        }
    });
});

//Update a category
router.put('/category/:id', (req, res) => {
    const { category } = req.body;
    const { id } = req.params;
    const query = 'CALL categoryAddorEdit(?,?)';

    con.query(query, [id, category], (err, rows, field) => {
        if(!err){
            res.json({Status: 'Category Updated'});
        } else {
            console.log(err);
        }
    });

});

module.exports = router;