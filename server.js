#!/bin/env node

// shaneckel

var config          = require('./config'),
    express         = require('express'),
    path            = require('path'),
    passport        = require('passport'),
    util            = require('util'),
    mongoose        = require('mongoose'),
    flash           = require('connect-flash');

var app             = express();

var configDB        = require('./database');
 
require('./passport.js')(passport); // pass passport for configuration

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');    
  app.use(express.static(path.join(__dirname + '/public')));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.csrf());
  app.use(function(req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
  });
});

mongoConnection = config.mongoUser + ":" +
  config.mongoPass + "@" +
  config.mongoHost + ':' +
  config.mongoPort + '/' +
  config.appname;

mongoose.connect(mongoConnection);

mongoose.connection.on('error', function(error){
  var date = new Date();
  console.error(date.toUTCString() + " Connection error: " + error);
});

mongoose.connection.on('disconnected', function(param){
  var date = new Date();
  console.error(date.toUTCString() + " Connection disconnected: " + param);
});

require('./routes.js')(app, passport);

app.listen( config.port, config.ip, function() { console.log("\n--- shaneckel.com  ---\n") });