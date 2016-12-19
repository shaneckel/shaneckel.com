#!/bin/env node

var config          = require('./config'),
    express         = require('express'),
    path            = require('path'),
    app             = express();

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.static(path.join(__dirname + '/public')));
  app.use(app.router);
});

require('./routes.js')(app);

app.listen( config.port, config.ip);
