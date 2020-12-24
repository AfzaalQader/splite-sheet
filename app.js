var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Router import here
var indexRouter = require('./api/routes/index');
var userRouter = require('./api/routes//user.route');

// Database
const DB = require("./server/boot/db.connection");

// const dotenv = require('dotenv');
// dotenv.config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Uses routes
app.use('/', indexRouter);
app.use('/users', userRouter);

// Database sync
DB.sync = ({
    force: true,  // -- Note: Warning! This will re-create the complete database and data will be lost.
    alter: true, // -- Use when you want to update table schema without loosing the data.
}, (req, res) => {
  console.log("Database created successfully!");
});

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

module.exports = app;
