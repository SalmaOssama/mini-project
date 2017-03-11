var mongoose = require('mongoose'), Schema = mongoose.Schema;

var projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true, 
        unique:true
    },

    filename: String,
    URL:String,
    username:String 
})

var Project = mongoose.model("project", projectSchema);

module.exports = Project;