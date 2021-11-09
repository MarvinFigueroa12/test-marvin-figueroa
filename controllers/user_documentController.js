const userDocument = require('../models/user_documentModel');

exports.getDocumentsByUsername = async (req, res, next) => {
    try {
        const [documentsByUsername] = await userDocument.fetchByUsername(req.params.username);
        res.status(200).json(formatterFunction(200, {documentsByUser: documentsByUsername}));
    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};