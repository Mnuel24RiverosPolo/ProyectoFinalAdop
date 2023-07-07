// var mongoose = require("mongoose");
// Schema = mongoose.Schema;
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/dbpets");
const { Schema, model } = require('mongoose');

var modelSchema = new Schema({
    
    title: {type:String, required:true},
    autor: {type:String, required:true},
    img: {type:String, required:true},
    descripcion: {type:String, required:true},
    fecha: {type:String, required:true},
    
 
});

module.exports = model('nota', modelSchema, 'nota');

