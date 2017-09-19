var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog2017', { useMongoClient: true, promiseLibrary: global.Promise });

const postSchema = mongoose.Schema({
	title: {type:String, required: true},
	body: String,
	posted: {type:Date, default: Date.now}
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); //for parsing json
app.use(bodyParser.urlencoded({extended:true})); //for parsing applications

app.post("/api/blogpost", createPost);

function createPost(req, res){
//creates post on server
	const post = req.body;
	console.log(post);
	res.json(post);
}
 
app.listen(3000);


