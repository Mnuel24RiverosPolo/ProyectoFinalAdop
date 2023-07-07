let model  = require('../models/post_model')

module.exports = {
    show: function(req, res){
        
        model.find({}, {comentarios: 1}, function(err, items){
            if(!err){
                res.json(items)

            }else{
                res.sendStatus(500);
                console.log(err)
            }
        })
    },

    agregarComentario: function(req, res) {
        let val_id = req.params.id;
        let nuevoComentario = {
            _id: req.body._id,
            autor: req.body.autor,
            mensaje: req.body.mensaje,
            fecha: req.body.fecha
        };
        model.findOneAndUpdate({_id: val_id}, {$push: {comentarios: nuevoComentario}}, function(err, newData) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(newData);
            }
        });
    },
    

    updateCommentporAutor: function(req, res) {
        let postId = req.params.postId;
        let autor = req.body.autor;
        let mensaje =  req.body.mensaje;
        
        model.findOneAndUpdate({ _id: postId, "comentarios.autor": autor},{ $set: { "comentarios.$.mensaje": mensaje } }, function(err,newData){
            if(err){
                console.log(err);
                res.sendStatus(500);

            }else{
                res.send(newData);
            }
    });
    },

    updateCommentporId: function(req, res) {
        let postId = req.params.postId;
        let comentId = req.body.comentId;
   
        let mensaje =  req.body.mensaje;
        
        model.findOneAndUpdate({ _id: postId, "comentarios._id": comentId},{ $set: { "comentarios.$.mensaje": mensaje } }, function(err,newData){
            if(err){
                console.log(err);
                res.sendStatus(500);

            }else{
                res.send(newData);
            }
    });
    },

}