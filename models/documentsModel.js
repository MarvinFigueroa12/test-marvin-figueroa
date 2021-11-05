const dataB = require('../util/database');

module.exports = class Document{
    constructor(id_document, document_name, url, date_of_creation, id_user, content, id_category){
        this.id = id_document;
        this.document_name = document_name;
        this.url = url;
        this.date_of_creation = date_of_creation;
        this.id_user = id_user;
        this.content = content;
        this.id_category = id_category;
    }

    static fetchAll(){
        return dataB.execute('SELECT * from documents');
    }

    static fetchById(id_document){
        return dataB.execute('SELECT * from documents where id_document = ?', [id_document]);
    }

    //Insert

    static update(id_document, content){
        return dataB.execute('CALL userAddorEdit(?,?)', [id_document, content]);
    }

    static delete(id_document){
        return dataB.execute('DELETE FROM documents WHERE id_document = ?', [id_document]);
    }
};