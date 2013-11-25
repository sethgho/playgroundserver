/**
 * This module loads dynamically all routes modules located in the routes/
 * directory.
 */
'use strict';
var fs = require('fs');
var path = require('path');


function index(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(fs.readFileSync('./index.html'));
}


module.exports = function (app) {
  fs.readdirSync('./routes').forEach(function (file) {
    // Avoid to read this current file.
    if (file === path.basename(__filename)) { return; }

    // Load the route file.
    require('./' + file)(app);
  });

  //Create index.
  app.get('/', index);
};