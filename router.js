const express = require('express');
var contact = require('./controller/contactController');
var bodyParser = require('body-parser')

var app = express()

var jsonParser = bodyParser.json()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// Contact
app.get('/getData', contact.getAll);
app.post('/addData', jsonParser, contact.addData);
app.put('/updateData/:id', jsonParser, contact.updateData);
app.delete('/deleteData/:id', contact.deleteData);

app.listen(3000);