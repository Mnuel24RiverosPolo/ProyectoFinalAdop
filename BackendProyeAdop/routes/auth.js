var express = require('express');
var router = express.Router();
var controller  = require('../controllers/authController')

router.post('/', function(req, res) {
    controller.authenticateUser(req,res);
});


router.post('/register', function(req, res) {
    controller.registerUser(req,res);
  });


// router.get('/show/:id', function(req, res) {
//     controller.detail(req,res);
//     });

// router.put('/update/:id', function(req, res) {
//     controller.update(req,res);
//     });
   
// router.delete('/delete/:id', function(req, res) {
//     controller.delete(req,res);
//     });

module.exports = router;