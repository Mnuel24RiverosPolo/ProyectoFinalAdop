let model  = require('../models/nota_model')
//kcfvgkbhln jklllkmj
module.exports = {
    show: function(req, res){
        
        model.find({}, function(err, items){
            if(!err){
                res.json(items)

            }else{
                res.sendStatus(500);
                console.log(err)
            }
        })

    },
    // detail : function(req, res){
        
    //     let val_id = req.params.id;
    //     model.findOne({_id:val_id}, function(err, data){
    //         if(err){
    //             console.log(err);
    //             res.sendStatus(500);

    //         }else{
    //             res.json(data);
    //         }
    //     });
    // },
    create: function(req,res){ 
        let obj = new model; 
        obj.title = req.body.title;
        obj.autor = req.body.autor;
        obj.img = req.body.img;
        obj.descripcion = req.body.descripcion;
        obj.fecha = req.body.fecha;

        obj.save(function(err,newData){
            if(err){ 
                console.log(err); 
                res.sendStatus(500);
            }else{
                res.json(newData);
            }
        });
    }, 
    // update: function(req,res){
    //     let val_id = req.params.id;
    //     let datos = {
    //         nombre : req.body.nombre,
    //         biografia : req.body.biografia,
    //         img: req.body.img,
    //         genero : req.body.genero
    //     };
    //     model .updateOne({_id:val_id},datos, function(err,newData){
    //         if(err){
    //             console.log(err);
    //             res.sendStatus(500);
    //         }else{
    //             res.send(newData);
    //         }
    //     });
    // },
    // delete: function(req,res){ 
    //     let val_id = req.params.id; 
    //     model.deleteOne({_id:val_id}, function (err) {
        
    //         if(err){ 
    //             console. log(err); 
    //             res.sendStatus(500); 
            
    //         }else{ 
    //         res.sendStatus(200); 
    //         }
    //     });  
    // }
}