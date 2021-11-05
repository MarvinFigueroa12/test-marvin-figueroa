const Category = require('../models/categoryModel');

exports.getAllCategories = async (req, res, next) => {
    try {
        const [getAllCategories] = await Category.fetchAll();
        res.status(200).json(getAllCategories);
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
        res.status(201).json(categoryById);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postCategory = async (req, res, next) => {
    try {
        const [postResponse] = await Category.post(req.body.id_category, req.body.categry);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putCategory = async (req, res, next) => {
    try {
        const [putResponse] = await Category.update(req.body.id_category, req.body.category);
        res.status(201).json(putResponse);
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
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};