var express = require('express'),
    path = require('path'),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname + '/public')));
app.use(app.router);

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);
