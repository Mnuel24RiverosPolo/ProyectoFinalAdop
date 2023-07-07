// var mongoose = require("mongoose");
// Schema = mongoose.Schema;
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/dbpets");

const { Schema, model } = require('mongoose');
var modelSchema = new Schema({
    
    name: { type: String},
    email: { type: String, required: true },
    password: { type: String, required: true },
    
});

module.exports = model('users', modelSchema, 'users');

//model = mongoose.model('users',modelSchema,'users');
// module.exports = model;
