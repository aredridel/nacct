/*jshint node:true */
"use strict";
var express = require('express'),
    requireReload = require('require-reload'),
    http = require('http'),
    stylus = require('stylus'),
    bootstrap = require('bootstrap.stylus'),
    path = require('path'),
    resource = require('express-resource');

var app = express();

function compile(str, path) {
    return stylus(str)
    .use(bootstrap())
    .set('filename', path)
    .set('warn', true)
    .set('compress', true);
}

var routes = requireReload('./routes', app);

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'mmm');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(routes);
  app.use(app.router);
  app.use(stylus.middleware({
      src: __dirname + '/styl',
      dest: __dirname + '/public',
      compile: compile
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
