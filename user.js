const { Schema } = require('mongoose')
var mongoose = require('./mongodb.js')

var UserSchema = new mongoose.Schema({
    username:{type: String},
    userpwd: {type: String},
    userage:{type:Number},
    logindate:{type:Date},
})

module.exports = mongoose.model('User',UserSchema)