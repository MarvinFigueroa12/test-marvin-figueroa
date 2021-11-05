const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Get all users
router.get('/users', userController.getAllUsers);

//Get user by ID
router.get('/users/:id_user', userController.getUserById);

//Insert a user
router.post('/users', userController.postUser);

//Update a User
router.put('/users/', userController.putUser);

//Delete an user
router.delete('/users/:id_user', userController.deleteUser);


module.exports = router;