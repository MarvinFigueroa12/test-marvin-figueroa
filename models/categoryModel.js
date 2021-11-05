const dataB = require('../database/database');

module.exports = class Category{
    constructor(id_category, category){
        this.id = id_category;
        this.username = category;
    }

    static fetchAll(){
        return dataB.execute('SELECT * from category');
    }

    static fetchById(id_category){
        return dataB.execute('SELECT * from category where id_category = ?', [id_category]);
    }

    static post(id_category, category){
        return dataB.execute('INSERT INTO category (id_category, category) VALUE (?, ?)', [id_category, category]);
    }

    static update(id_category, category){
        return dataB.execute('CALL categoryAddorEdit(?,?)', [id_category, category]);
    }

    static delete(id_category){
        return dataB.execute('DELETE from category where id_category = ?', [id_category]);
    }
};