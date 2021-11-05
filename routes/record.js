const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');

//Get all records
router.get('/records', recordController.getAllRecords);

//Get a record
router.get('/records/:id_record', recordController.getRecordById);


module.exports = router;