var mongoose = require('mongoose')
,Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: {
    type: String,
    default: id.generate()
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

module.exports = mongoose.model('User', userSchema);