const dataB = require('../util/database');

module.exports = class Record {
    constructor(id_record, content){
        this.id = id_record;
        this.content = content;
    }

    static fetchAll(){
        return dataB.execute('SELECT * from record');
    }

    static fetchById(id_record){
        return dataB.execute('SELECT * from record where id_record = ?', [id_record]);
    }

};