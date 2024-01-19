var User = require('../models/usuario_model'); 
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'secretkey';

// Función para autenticar un usuario
exports.authenticateUser = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email + password)

  

  // Busca el usuario por su dirección de correo electrónico
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      res.status(500).json({ error: 'Error interno del servidor' });
    } else if (!user) {
      res.status(401).json({ error: 'Credenciales inválidas' });
    } else {
      console.log(password + user.password);
      //res.status(200).json({ message: 'Autenticación exitosa'});
      bcrypt.compare(password, user.password , function(err, match) {
        if (err) {
          res.status(500).json({ error: 'Error interno del servidor' });
        } else if (!match) {
          res.status(401).json({ error: 'Credenciales inválidas' });
        } else {
          // Autenticación exitosa
          const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '24h' });
          res.status(200).json({ token});
        }
      });
    }
  });
};

// Función para registrar un nuevo usuario
exports.registerUser = function(req, res) {
  const { name, email, password } = req.body;

  // Verificar si el usuario ya existe en la base de datos
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      res.status(500).json({ error: 'Error interno del servidor' });
    } else if (existingUser) {
      res.status(409).json({ error: 'El correo electrónico ya está en uso' });
    } else {
      
      // Crear un nuevo objeto de usuario
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });

      // Encriptar la contraseña antes de guardarla en la base de datos
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) {
            res.status(500).json({ error: 'Error interno del servidor' });
          } else {
            // Asignar la contraseña encriptada al nuevo usuario
            newUser.password = hash;

            // Guardar el nuevo usuario en la base de datos
            newUser.save(function(err) {
              if (err) {
                res.status(500).json({ error: 'Error interno del servidor' });
              } else {
              
                res.status(200).json({ message: 'Registro exitoso' });
              }
            });
          }
        });
      });
    }
  });
};
