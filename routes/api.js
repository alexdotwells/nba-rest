// dependencies
var express = require('express');
var router = express.Router();

// models
var Player = require('../models/player');
var Teams = require('../models/team');

// routes
Player.methods(['get', 'put', 'post', 'delete']);
Player.register(router, '/players');
Team.methods(['get', 'put', 'post', 'delete']);
Team.register(router, '/teams');

// return router
module.exports = router;
