var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog2017', { useMongoClient: true, promiseLibrary: global.Promise });

const PostSchema = mongoose.Schema({
	title: {type:String, required: true},
	body: String,
	tag:{type:String, enum: ['Technology', 'Learning','Economy','Javascript']},
	posted: {type:Date, default: Date.now}
}, {collection: 'post'});

const PostModel = mongoose.model("PostModel", PostSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); //for parsing json
app.use(bodyParser.urlencoded({extended:true})); //for parsing applications

app.post("/api/blogpost", createPost);
app.get("/api/blogpost", getAllPosts);
app.delete("/api/blogpost/:id", deletePost);
app.get("/api/blogpost/:id", getPostByID);


function getPostByID(req, res){
	const postID = req.params.id;

	PostModel
		.findById(postID)
		.then(
			function(post){
				res.json(post);
		},
		function(error){
			res.sendStatus(400);
		});
}


function deletePost(req, res){
	//delete a post, supply an id
	const postID = req.params.id;

	PostModel
		.remove({_id: postID})
		.then(function(status){
			res.sendStatus(200);
		},function(){
			res.sendStatus(400);
		});
}

function getAllPosts(req, res){
	PostModel
		.find()
		.then(
			function(posts){
				res.json(posts);
			},
			function(error){
				res.sendStatus(400);
			});
}

function createPost(req, res){
//creates post on server
	const post = req.body;
	
	PostModel
		.create(post)
		.then( //promises
			function(postObj){
				res.json(200);
			},
			function(error){
				res.sendStatus(400);
			}
		); //insert into db
	console.log(post);
	res.json(post);

}



 
app.listen(3000);

