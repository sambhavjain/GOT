var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express(),
fs = require('fs');

var configDB = require('./config/database.js');

// configuration ===============================================================
//mongoose.connect(configDB.url); // connect to our database

app.get('/read', function(req, res){
  var Converter = require("csvtojson").Converter;
  var converter = new Converter({});
   
  //end_parsed will be emitted once parsing finished 
  converter.on("end_parsed", function (jsonArray) {
     console.log(jsonArray); //here is your result jsonarray 
     var json = JSON.stringify(jsonArray)
     fs.writeFile('./battles.json', json, 'utf8')
  });
   
  //read from file 
  require("fs").createReadStream("./battles.csv").pipe(converter);
   
})
require('./routes/routes.js')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
