// var mongoose = require("mongoose");
// Schema = mongoose.Schema;
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://127.0.0.1:27017/dbpets");
const { Schema, model } = require('mongoose');
var modelSchema = new Schema({
    
    nombre: {type:String, required:true},
    img: {type:String, required:true},
    biografia: {type:String, required:true},
    edad: {type:String, required:true},
    genero: {type:String, required:true},
    cumple: {type:String, required:true},
    esterilizado: {type:String, required:true},
    raza: {type:String, required:true},
    tamano: {type:String, required:true},
    vacunado: {type:String, required:true},
    telefono: {type:String, required:true}
 
});



module.exports = model('pet', modelSchema, 'pet');


