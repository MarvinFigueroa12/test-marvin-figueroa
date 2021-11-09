const dataB = require('../database/database');

module.exports = class User{
    constructor(id_user, username){
        this.id = id_user;
        this.username = username;
    }

    static fetchAll(){
        return dataB.execute('SELECT * from users');
    }

    static fetchById(id_user){
        return dataB.execute('SELECT * from users where id_user = ?', [id_user]);
    }

    static post(id_user, username){
        return dataB.execute('INSERT INTO users (id_user, username) VALUE (?, ?)', [id_user, username]);
    }

    static update(id_user, username){
        return dataB.execute('CALL userAddorEdit(?,?)', [id_user, username]);
    }

    static delete(id_user){
        return dataB.execute('DELETE from users where id_user = ?', [id_user]);
    }

};