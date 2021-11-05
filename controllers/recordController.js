const Record = require('../models/recordModel');

exports.getAllRecords = async (req, res, next) => {
    try {
        const [allRecords] = await Record.fetchAll();
        res.status(200).json(allRecords);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getRecordById = async (req, res, next) => {
    try {
        const [recordById] = await Record.fetchById(req.params.id_record);
        res.status(201).json(recordById);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};