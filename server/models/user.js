/*var mongoose = require('mongoose')
,Schema = mongoose.Schema
,ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    _id: {
    type: String,
    default: ObjectId
    },
    firstName:{
        type: String,
        required: true
    },
    dateCreated: {type: Date, default: Date.now},
    accountType:
        {
        type: String,
        enum: ['admin', 'normal'],
        default: 'normal'
    }
 
});

module.exports = mongoose.model('User', userSchema); */