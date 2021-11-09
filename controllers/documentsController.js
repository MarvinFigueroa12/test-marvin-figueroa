const Document = require('../models/documentsModel');
const errors = require('../controllers/error');
const { formatterFunction } = require('../helpers/apiFormatter');

exports.getAllDocuments = async (req, res, next) => {
    try {
        const [allDocuments] = await Document.fetchAll();
        res.status(200).json(formatterFunction(200, {documents: allDocuments}));
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
        const [id] = await Document.Id(req.params.id_document);
        const [relationship] = await Document.relationships(req.params.id_document);
        res.status(200).json(formatterFunction(200, {document: {id: id, attributes: documentById, retationships: relationship}}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postDocument = async (req, res, next) => {
    try {
        if(req.body.id_document = null){
            errors.get400();
        }else{
            const [postResponse] = await Document.post(req.body.id_document, req.body.document_name, req.body.url, req.body.date_of_creation, req.body.id_user, req.body.content, req.body.id_category);
        await Document.recordDocument(req.body.id_document, req.body.document_name, req.body.date_of_creation, req.body.content, req.body.id_document);
        await Document.userDocument(req.body.id_document, req.body.id_document, req.body.id_user);
        res.status(201).json(formatterFunction(201, {documentCreated: postResponse}));
        }
        
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.putDocument = async (req, res, next) => {
    try {
        if(req.body.id_document = null){
            errors.get400();
        }else{
            const [putResponse] = await Document.update(req.body.id_document, req.body.content);
            res.status(200).json(formatterFunction(200, {documentUpdated: putResponse}));
        }
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
        res.status(200).json(formatterFunction(200, {documentDeleted: deleteResponse}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

