const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema(
    {
        nome: {type: String, require: true},
        sobrenome: {type: String, require: true},
        email: {type: String, require: true},
        senha: {type: String, require: true}
    });
module.exports = mongoose.model('User', user);