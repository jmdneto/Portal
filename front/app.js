var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session')


var indexRouter = require('../front/routes/index');
var usersRouter = require('../front/routes/users');
var mailRouter = require('../front/routes/mail');

var app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname , 'public/03')));

// app.use('/01/',express.static(path.join(__dirname + '/public/01')));
// app.use('/02/',express.static(path.join(__dirname + '/public/02')));
// app.use('03/assets',express.static(path.join(__dirname + '/public/03/assets')));
// app.use('03/images',express.static(path.join(__dirname + '/public/03/images')));
//app.use('/03/assets',express.static(path.join(__dirname + '/public/03/assets')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sayHello', mailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//app.use(bodyParser.json());
//app.use (bodyParser.urlencoded ({extended: true}));

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
