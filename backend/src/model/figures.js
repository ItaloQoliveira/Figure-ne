const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const FigureSchema = new Schema({
    nome : {type: String},
    serie: {type:String},
    preco : {type: String},
    altura : {type: String},
    url : {type: String},
    email : {type: String},
    created: {type:Date,default:Date.now}

})

module.exports = mongoose.model('Figure',FigureSchema);