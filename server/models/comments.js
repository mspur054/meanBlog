const mongoose = require('mongoose')
,Schema = mongoose.Schema;


const commentSchema = Schema({
    post_id: {type: Schema.Types.ObjectId, ref:'PostModel'},
    _creator: {type: Schema.Types.ObjectId, ref: 'UserModel'},
    body: string,
    posted: {type:Date, default: Date.now}
});


module.exports = mongoose.model('CommentModel', commentSchema);
 
