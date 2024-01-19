var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var indexRouter = require('./routes/index');

var dashRouter = require('./routes/dash');


var PetRouter = require('./routes/pets')
var UsuarioRouter = require('./routes/usuarios')
var NotaRouter = require('./routes/nota')
var AuthRouter = require('./routes/auth')
var app = express();
const PORT = process.env.PORT || 3000; 
// Habilitar CORS para todas las rueeeet
app.use(cors());




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/dashboard',dashRouter);

app.use('/pet', PetRouter );
app.use('/usuario', UsuarioRouter);
app.use('/nota', NotaRouter );
app.use('/authuser', AuthRouter );
app.use('/authuser/register', AuthRouter );
require('./database');


// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./routes/index'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

module.exports = app;
