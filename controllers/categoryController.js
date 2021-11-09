const Category = require('../models/categoryModel');
const errors = require('../controllers/error');
const { formatterFunction } = require('../helpers/apiFormatter');

exports.getAllCategories = async (req, res, next) => {
    try {
        const [getAllCategories] = await Category.fetchAll();
        res.status(200).json(formatterFunction(200, {categories: getAllCategories}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getCategoryById = async (req, res, next) => {
    try {
        const [categoryById] = await Category.fetchById(req.params.id_category);
        res.status(200).json(formatterFunction(200, {category: categoryById}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postCategory = async (req, res, next) => {
    try {
        if(req.body.id_category = null){
            errors.get400();
        }else{
            const [postResponse] = await Category.post(req.body.id_category, req.body.categry);
            res.status(201).json(formatterFunction(201, {categoryCreated: postResponse}));
        }
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putCategory = async (req, res, next) => {
    try {
        if(req.body.id_category = null){
            errors.get400();
        }else{
            const [putResponse] = await Category.update(req.body.id_category, req.body.category);
            res.status(200).json(formatterFunction(200, {categoryUpdated: putResponse}));
        }
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const [deleteResponse] = await Category.delete(req.params.id_category);
        res.status(200).json(formatterFunction(200, {categoryDeleted: deleteResponse}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};