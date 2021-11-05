const dataB = require('../database/database');

module.exports = class userDocument{
    constructor(id ,id_user, id_document){
        this.id = id;
        this.id_user = id_user;
        this.id_document = id_document;
    }

    static fetchByUsername(username){
        return dataB.execute('SELECT document_name from documents inner join user_document on documents.id_document = user_document.id_document inner join users on user_document.id_user = users.id_user where username = ?',[username]);
    }
};