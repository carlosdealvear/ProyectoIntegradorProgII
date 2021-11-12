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
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // SESSION
  app.use(session({
    secret: "Nuestro mensaje secreto",
    resave: false,
    saveUninitialized: true
  }));

  //cookies
app.use(function (req, res, next) {
  if(req.cookies.id_usuario != undefined && req.session.user == undefined){
    db.usuario.findByPk(req.cookies.id_usuario)
    .then(user =>{
      req.session.user = user;
 return next();
    })
  .catch(e => {
    next(createError(e.status))
  } ) 
  }  
  else {next()}
  
})
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;