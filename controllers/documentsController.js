const Document = require('../models/documentsModel');

exports.getAllDocuments = async (req, res, next) => {
    try {
        const [allDocuments] = await Document.fetchAll();
        res.status(200).json(allDocuments);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getDocumentById = async (req, res, next) => {
    try {
        const [documentById] = await Document.fetchById(req.params.id_document);
        res.status(201).json(documentById);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

//Insert

exports.putDocument = async (req, res, next) => {
    try {
        const [putResponse] = await Document.update(req.body.id_document, req.body.content);
        res.status(201).json(putResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteDocument = async (req, res, next) => {
    try {
        const [deleteResponse] = await Document.delete(req.params.id_document);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

