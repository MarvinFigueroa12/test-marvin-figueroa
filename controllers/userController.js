const User = require('../models/userModel');
const errors = require('../controllers/error');
const { formatterFunction } = require('../helpers/apiFormatter');

exports.getAllUsers = async (req, res, next) => {
    try {
        const [allUsers] = await User.fetchAll();
        res.status(200).json(formatterFunction(200, {users: allUsers}));
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
        res.status(201).json(formatterFunction(200, {user: userById}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postUser = async (req, res, next) => {
    try {
        if(req.body.id_user = null){
            errors.get400();
        }else{
            const [postResponse] = await User.post(req.body.id_user, req.body.username);
            res.status(201).json(formatterFunction(201, {userCreated: postResponse}));
        }
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putUser = async (req, res, next) => {
    try {
        if(req.body.id_user = null){
            errors.get400();
        }else{
            cconst [putResponse] = await User.update(req.body.id_user, req.body.username);
            res.status(200).json(formatterFunction(200, {userUpdated: putResponse}));
        }
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
        res.status(200).json(formatterFunction(200, {userDeleted: deleteResponse}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};



