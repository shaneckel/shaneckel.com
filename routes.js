

var Todo = require('./todo');

module.exports = function(app, passport) {


  //admin

  app.get("/admin/admin", ensureAuthenticated, function(req, res){
    res.render('admin', { user: req.user});
  });

  app.post('/admin/login',
    passport.authenticate('local', { failureRedirect: '/admin/login', successRedirect: '/admin/admin', failureFlash: true }),
    function(req, res) {
      res.redirect('/admin/admin');
    });

  app.get("/admin/login", checkAuthenticated, function(req, res){
    res.render('login', { message: req.flash('error')   });
  });

  app.get('/admin/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
 
  app.get('/api/todos', ensureAuthenticated, function(req, res) {
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)
      res.json(todos); 
    });
  });

  app.post('/api/todos', ensureAuthenticated, function(req, res) {
    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });  

  app.post('/api/todos/:todo_id', ensureAuthenticated, function(req, res) {
    Todo.update({_id : req.params.todo_id }, {$set: {done: req.body.done , text: req.body.text}}, {upsert: true}, 
      function(err, todo){
        if(err)
          res.send(err);
        Todo.find( function(err, todos) {
          if (err)
            res.send(err)
          res.json(todos);
        })
      })
  });
 
  app.delete('/api/todos/:todo_id', ensureAuthenticated, function(req, res) {
    Todo.remove({_id : req.params.todo_id}, 
      function(err, todo) {
        if (err)
          res.send(err);
        Todo.find(function(err, todos) {
          if (err) 
            res.send(err)
          res.json(todos);
        });
      });
  });

  //site

  app.get('/', function(req, res) {
    res.render('index');
  });
 
  app.get('/templ/:name',  function (req, res) {
    var name = req.params.name;
     res.render('templ/' + name);
  }); 

  //site catch-all

  app.get('*', function(req, res) {
    res.render('index');
  });
 
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/admin/login');
  }  

  function checkAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) { return next(); }
    res.redirect('/admin/admin');
  }

}