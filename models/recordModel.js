const dataB = require('../database/database');

module.exports = class Record {
    constructor(id_record, content){
        this.id = id_record;
        this.content = content;
    }

    static fetchAll(){
        return dataB.execute('SELECT * from record');
    }

    static fetchById(id_record){
        return dataB.execute('SELECT edit_date, document_name, content from record where id_record = ?', [id_record]);
    }

    static Id(id_record){
        return dataB.execute('SELECT id_record from record where id_record = ?', [id_record]);
    }

    static relationships(id_record){
        return dataB.execute('SELECT documents.id_document from record inner join documents on documents.id_document = record.id_document where record.id_record = ?', [id_record]);
    }
};