const express = require('express');
const router = express.Router();
const documentsController = require('../controllers/documentsController')

//Get all documents
router.get('/documents', documentsController.getAllDocuments);

//Get user by ID
router.get('/documents/:id_document', documentsController.getDocumentById);

//Inser
router.post('/documents', documentsController.postDocument);

//Update a document
router.put('/documents/', documentsController.putDocument);

//Delete a document
router.delete('/documents/:id_document', documentsController.deleteDocument);


module.exports = router;