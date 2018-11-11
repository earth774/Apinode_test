const express = require('express');
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());
//config data
app.use(require('./configs/config'));
// config route
app.use('/api', require('./configs/route'));


app.listen(3000);