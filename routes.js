

var Todo = require('./todo');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get("/admin", ensureAuthenticated, function(req, res){
    res.render('admin', { user: req.user});
  });

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/admin', failureFlash: true }),
    function(req, res) {
      res.redirect('/');
    });

  app.get("/login", checkAuthenticated, function(req, res){
    console.log(req.user);
    res.render('login', { user: req.flash('user'), message: req.flash('error')   });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
 

 // api ---------------------------------------------------------------------
  // get all todos
  app.get('/api/todos', ensureAuthenticated, function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
  });

  // create todo and send back all todos after creation
  app.post('/api/todos', ensureAuthenticated, function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });

  });

  // delete a todo
  app.delete('/api/todos/:todo_id', ensureAuthenticated, function(req, res) {
    Todo.remove({
      _id : req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });


  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    console.log("NO ACCESS YA MO");
    res.redirect('/login');
  }  
  function checkAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) { return next(); }
    res.redirect('/admin');
  }

}