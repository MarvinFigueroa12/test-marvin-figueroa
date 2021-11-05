const express = require('express');
const router = express.Router();
const userdocumentController = require('../controllers/user_documentController');

//Get all documents of one user
router.get('/userdocuments/:username', userdocumentController.getDocumentsByUsername);


module.exports = router;