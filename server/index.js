var express = require('express');
var path = require('path');
var env = require('../env.config');

var app = express();
var publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));
app.listen(env.LM_PORT, function() {
  console.log('Server running on port ' + env.LM_PORT);
});
