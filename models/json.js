
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var taskJsonSchema   = new Schema({
    taskid: String,
    json: String
});

module.exports = mongoose.model('TaskJson', taskJsonSchema);