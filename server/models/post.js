const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
	title: {type:String, required: true},
	body: String,
	tag:{type:String, enum: ['Technology', 'Learning','Economy','Javascript']},
	posted: {type:Date, default: Date.now}
}, {collection: 'post'});


const PostModel = mongoose.model('PostModel', PostSchema);

module.exports = PostModel;
