const dataB = require('../database/database');

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

    static post(id_document, document_name, url, date_of_creation, id_user, content, id_category){
        return dataB.execute('INSERT INTO documents (id_document, document_name, url, date_of_creation, id_user, content, id_category ) VALUES (?,?,?,?,?,?,?)', [id_document, document_name, url, date_of_creation, id_user, content, id_category]);
    }

    static update(id_document, content){
        return dataB.execute('CALL userAddorEdit(?,?)', [id_document, content]);
    }

    static delete(id_document){
        return dataB.execute('DELETE FROM documents WHERE id_document = ?', [id_document]);
    }

    static recordDocument(id_record, document_name, edit_date, content, id_document){
        return dataB.execute('INSERT INTO record (id_record, document_name, edit_date, content, id_document ) VALUES (?,?,?,?,?)', [id_record, document_name, edit_date, content, id_document]);
    }

    static userDocument(id, id_document, id_user){
        return dataB.execute('INTO user_document (id, id_document, id_user ) VALUES (?,?,?)', [id, id_document, id_user]);
    }
};