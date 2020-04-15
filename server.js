// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
// methodoverride goes here

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');

// LOAD AND CONFIG PASSPORT.JS// LOAD AND CONFIG PASSPORT.JS
require('./config/passport');

const indexRouter = require('./routes/index');
const matzasRouter = require('./routes/matzas');
// api routes
const apiMatzasRouter = require('./routes/api/matzas');
const apiCommentsRouter= require('./routes/api/comments')
// const commentsRouter = require('./routes/comments');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// method_override middleware goes here
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
// the following line had extended: false, but completed code had true so changing to see what happens
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'MatzaTime!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/matzas', matzasRouter);
app.use('/api/matzas',apiMatzasRouter);
app.use('/api/matzas',apiCommentsRouter);
// app.use('/', commentsRouter)


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler (don't know what this is, isn't in the completed code)
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
