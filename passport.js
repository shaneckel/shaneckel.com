 
var localStrategy = require('passport-local').Strategy;
 
module.exports = function(passport) {
 
  var user = { id: 1, username: 'shane', password: 'secret', email: 'shane@example.com' };
 
  function findByUsername(username, fn) {
    if (user.username === username) {
      return fn(null, user);
    }
    return fn(null, null);
  }

  passport.use(new localStrategy(
    function(username, password, done) {
       process.nextTick(function () {
         findByUsername(username, function(err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
          if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
          return done(null, user);
        })
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

};