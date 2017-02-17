// dependencies
var express = require('express');
var router = express.Router();

// models
var Player = require('../models/player');

// routes
Player.methods(['get', 'put']);
Player.register(router, '/players');

// return router
module.exports = router;
