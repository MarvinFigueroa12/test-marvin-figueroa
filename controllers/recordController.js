const Record = require('../models/recordModel');
const { formatterFunction } = require('../helpers/apiFormatter');

exports.getAllRecords = async (req, res, next) => {
    try {
        const [allRecords] = await Record.fetchAll();
        res.status(200).json(formatterFunction(200, {records: allRecords}));
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
        const [id] = await Record.Id(req.params.id_record);
        const [relationship] = await Record.relationships(req.params.id_record);
        res.status(200).json(formatterFunction(200, {Record: {id: id, atributes: recordById, retationships: relationship}}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};