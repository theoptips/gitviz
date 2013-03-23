(function() {
  var app, db, everyauth, express, http, path, routes;

  express = require('express');

  routes = require('routes');

  http = require('http');

  path = require('path');

  everyauth = require('everyauth');

  db = require('./db.js');

  app = express();

  app.configure(function() {
    app.pwd = path.dirname(module.uri);
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(app.pwd, '/client/app/views'));
    app.engine('.html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view options', {
      layout: false
    });
    app.use(express.compress());
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.cookieParser('secretz'));
    app.use(express.session());
    app.use(everyauth.middleware(app));
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express["static"](path.join(app.pwd, '/client/app/')));
    return app.use(express.logger());
  });

  app.get('/', function(req, res) {
    return res.render('layout');
  });

  app.get('/index.html', function(req, res) {
    return res.render('index');
  });

  app.get('/api/leagues/:id', function(req, res) {
    var id;

    id = req.params.id;
    return res.json({
      user: id,
      data: "What!"
    });
  });

  app.listen(3000);

  console.log('Go to http://localhost:3000');

  module.exports = app;

}).call(this);
