//_             = require('underscore'),
    
var path          = require('path'),
    passport      = require('passport'),
    flash         = require('connect-flash');
    
module.exports = function(app) {

  app.get('/*', function(req, res) {
    res.render('index');
  });
}