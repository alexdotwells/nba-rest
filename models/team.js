// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// schema
var teamSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    teamId: String,
    teamId: String
});

// return model
module.exports = restful.model('Team', teamSchema);
