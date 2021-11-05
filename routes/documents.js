const express = require('express');
const router = express.Router();
const documentsController = require('../controllers/documentsController')

//Get all documents
router.get('/documents', documentsController.getAllDocuments);

//Get user by ID
router.get('/documents/:id_document', documentsController.getDocumentById);

//Inser

//Update a document
router.put('/documents/', documentsController.putDocument);

//Delete a document
router.delete('/documents/:id_document', documentsController.deleteDocument);

/*/Delete a document
router.delete('/document/:id', (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM documents WHERE id_document = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'Document Deleted'});
        } else {
            console.log(err);
        }
    });
});

//Insert a document
router.post('/document', (req, res) => {
    const {id_document, document_name, url, date_of_creation, id_user, content, id_category} = req.body;
    const query1 = `
        INSERT INTO documents (id_document, document_name, url, date_of_creation, id_user, content, id_category ) VALUES (?,?,?,?,?,?,?);
    `;
    const query2 = `
    INSERT INTO record (id_record, document_name, edit_date, content, id_document ) VALUES (?,?,?,?,?);
    `;

    const query3 = `
    INSERT INTO user_document (id, id_document, id_user ) VALUES (?,?,?);
    `;

    con.query(query1, [id_document, document_name, url, date_of_creation, id_user, content, id_category], (err, rows, field) => {
        if(!err){
            res.json({Status: 'Document Saved'});
        } else {
            console.log(err);
        }
    });
    con.query(query2, [id_document, document_name, date_of_creation, content, id_document], (err, rows, field) => {
        if(!err){
            res.json({Status: 'Document backed up'});
        } else {
            console.log(err);
        }
    });

    con.query(query3, [id_document,id_document, id_user], (err, rows, field) => {
        if(!err){
            res.json({Status: 'docuemnt_user'});
        } else {
            console.log(err);
        }
    });

});

});*/

module.exports = router;