var express = require('express');
var router = express.Router();
var controller  = require('../controllers/comentController')

router.get('/listar', function(req, res) {
    controller.show(req,res);
});

router.post('/create/:id', function(req, res) {
    controller.agregarComentario(req,res);
});

router.post('/update/:postId', function(req, res) {
    controller.updateCommentporAutor(req,res);
    });




module.exports = router;