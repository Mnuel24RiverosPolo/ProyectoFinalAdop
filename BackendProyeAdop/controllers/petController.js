let model  = require('../models/pet_model')
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
    detail : function(req, res){
        
        let val_id = req.params.id;
        model.findOne({_id:val_id}, function(err, data){
            if(err){
                console.log(err);
                res.sendStatus(500);

            }else{
                res.json(data);
            }
        });
    },
    create: function(req,res){ 
        let obj = new model; 
        obj.nombre = req.body.nombre;
        obj.img = req.body.img;
        obj.biografia = req.body.biografia;
        obj.edad = req.body.edad;
        obj.genero = req.body.genero;
        obj.cumple = req.body.cumple;
        obj.esterilizado = req.body.esterilizado;
        obj.raza = req.body.raza;
        obj.tamano = req.body.tamano;
        obj.vacunado = req.body.vacunado;
        obj.telefono = req.body.telefono;
        obj.save(function(err,newData){
            if(err){ 
                console.log(err); 
                res.sendStatus(500);
            }else{
                res.json(newData);
            }
        });
    }, 
    update: function(req,res){
        let val_id = req.params.id;
        let datos = {
            nombre : req.body.nombre,
            img : req.body.img,
            biografia : req.body.biografia,
            genero : req.body.genero,
            esterilizado : req.body.esterilizado,
            raza : req.body.raza,
            vacunado : req.body.vacunado,
            telefono : req.body.telefono,
        };
        model .updateOne({_id:val_id},datos, function(err,newData){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.send(newData);
            }
        });
    },
    delete: function(req,res){ 
        let val_id = req.params.id; 
        model.deleteOne({_id:val_id}, function (err) {
        
            if(err){ 
                console. log(err); 
                res.sendStatus(500); 
            
            }else{ 
            res.sendStatus(200); 
            }
        });  
    }
}