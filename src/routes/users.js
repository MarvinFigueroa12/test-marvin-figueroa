const express = require('express');
const router = express.Router();
const con = require('../../database/db')

//Get all users
router.get('/users', (req, res) => {
    con.query('SELECT * from users', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Get an user by id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * from users where id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Get an user by username
router.get('/users/:username', (req, res) => {
    const { username } = req.params;
    con.query('SELECT * from users where username = ?', [username], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


//Delete an user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM users WHERE id_user = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'User Deleted'});
        } else {
            console.log(err);
        }
    });
});

//Insert a user
router.post('/users', (req, res) => {
    const {id_user, username} = req.body;
    const query = `
        INSERT INTO users (id_user, username) VALUES (?,?);
    `;
    con.query(query, [id_user, username], (err, rows, field) => {
        if(!err){
            res.json({Status: 'User Saved'});
        } else {
            console.log(err);
        }
    });
});

//Update a User
router.put('/users/:id', (req, res) => {
    const { username } = req.body;
    const { id } = req.params;
    const query = 'CALL userAddorEdit(?,?)';

    con.query(query, [id, username], (err, rows, field) => {
        if(!err){
            res.json({Status: 'User Updated'});
        } else {
            console.log(err);
        }
    });

});

module.exports = router;