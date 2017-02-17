// dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// mongodb
mongoose.connect('mongodb://localhost/nba_rest');

// express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/api', require('./routes/api'));

// start server
app.listen(3000);
console.log('NBA REST API is running on port 3000');
