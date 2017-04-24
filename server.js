var express = require('express'),
    path = require('path'),
    env = require('dotenv').load();
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname + '/public')));
app.use(app.router);

app.get('*', function(req, res) {
  res.render('index' , {swag: process.env.SWAG});
});

app.listen(process.env.PORT || 3000);
