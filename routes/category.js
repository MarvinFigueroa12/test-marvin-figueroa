const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

//Get all categories
router.get('/categories', categoryController.getAllCategories);

//Get category by ID
router.get('/categories/:id_category', categoryController.getCategoryById);

//Insert a user
router.post('/categories', categoryController.postCategory);

//Update a User
router.put('/categories/', categoryController.putCategory);

//Delete an user
router.delete('/categories/:id_user', categoryController.deleteCategory);

module.exports = router;