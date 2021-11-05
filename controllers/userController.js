const User = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
    try {
        const [allUsers] = await User.fetchAll();
        res.status(201).json({
            message: '',
            users: allUsers
        });
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const [userById] = await User.fetchById(req.params.id_user);
        res.status(201).json(userById);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postUser = async (req, res, next) => {
    try {
        const [postResponse] = await User.post(req.body.id_user, req.body.username);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putUser = async (req, res, next) => {
    try {
        const [putResponse] = await User.update(req.body.id_user, req.body.username);
        res.status(201).json(putResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const [deleteResponse] = await User.delete(req.params.id_user);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};


