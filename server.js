#!/bin/env node

// nomorerack analytics 

var express         = require('express'),
    path            = require('path');
    //routes          = require('./routes'),
    //user            = require('./user.js');

var app             = express();

var ipaddress       = process.env.OPENSHIFT_NODEJS_IP || "localhost";
    port            = process.env.OPENSHIFT_NODEJS_PORT || 4000;

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');    
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname + '/public')));
    app.use(express.cookieParser());

    app.use(express.cookieSession({secret: process.env.COOKIE_SECRET || "partytime" }));
    app.configure('development', 'production', function() {
      app.use(express.csrf());
      app.use(function(req, res, next) {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        next();
      });
    });

    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.enable("jsonp callback");
    //app.use(flash());
  });

// app.use(passport.initialize());
// app.use(passport.session());
//passport.use(user.googleStrategy(ipaddress, port));
// passport.serializeUser(user.serializeUser);
// passport.deserializeUser(user.deserializeUser);

app.get('/*', function(req, res) {
  res.render('index');
});
//require('./routes.js')(app);
 
app.listen( port, ipaddress, function() { console.log("\n--- shaneckel.com  ---\n") });