var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var postRouter = require('./routes/post');
const db = require('./database/models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: true}));

// Antes de las rutas. Dejar disponible datos de sessión para todas las vistas
app.use(function(req, res, next){
  console.log('En session middleware');
  console.log(req.session);
  if(req.session.users != undefined){
    res.locals.users = req.session.users;
    console.log("entre en locals: ");
    console.log(res.locals);
    return next();
  } 
  return next(); //Clave para que el proceso siga adelante.  
})
//Gestionar la coockie.
app.use(function(req, res, next){
  //Solo quiero hacerlo si tengo una coockie
  if(req.cookies.id_usuario != undefined && req.session.users == undefined){
    let idDeLaCookie = req.cookies.id_usuario;
    db.usuario.findByPk(idDeLaCookie)
    .then( user => {
      console.log('en cookie middleware trasladando');
      req.session.users = user; //Estamos poniendo en session a toda la instancia del modelo. Debería ser solo user.dataValues.
      console.log('en cookie middleware');
      console.log(req.sessions.user);
      res.locals.user = user; //Se corrije si usamos user.dataValues
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    //Si no tengo cookie quiero que el programa continue
    return next();
  }
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
module.exports = app;