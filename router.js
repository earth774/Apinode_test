const express = require('express');
var contact = require('./controller/contactController');
var bodyParser = require('body-parser')

var app = express()

var jsonParser = bodyParser.json()

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
  next()
})

// Contact
app.get('/getData', contact.getAll);
app.post('/addData', jsonParser, contact.addData);
app.put('/updateData/:id', jsonParser, contact.updateData);
app.delete('/deleteData/:id', contact.deleteData);

app.listen(3000);