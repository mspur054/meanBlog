'use strict';

const mongoose = require('mongoose'),
    PostModel = mongoose.model('PostModel');

exports.getAllPosts = function (req, res){
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

exports.createPost = function(req, res){
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




//Requires ID
exports.getPostByID = function (req, res){
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

exports.updatePost = function (req,res){
	const postID = req.params.id;
	const post = req.body;

	PostModel
		.update({_id: postID},{
			title: post.title,
			body: post.body
		})
		.then(
			function(status){
				res.sendStatus(200);
			},
			function(error){
				res.sendStatus(400);
			});
}

exports.deletePost = function(req, res){
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

