
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes');
const config = require("./config");

var mongoose = require("mongoose");

try{
    mongoose.connect(config.mongoconnect);
}catch(er){
    console.log("Mongo error" + er);
}


// Express app will use body-parser to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 8080;        // set the port

// Define a prefix for all routes
// Can define something unique like MyRestAPI
// We'll just leave it so all routes are relative to '/'
app.use('/', routes);

// Start server listening on port 8080
app.listen(port);
console.log('RESTAPI listening on port: ' + port);