// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// schema
var playerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    playerId: String,
    teamId: String
});

// return model
module.exports = restful.model('Player', playerSchema);
