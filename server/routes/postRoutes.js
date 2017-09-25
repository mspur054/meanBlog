'use strict';

module.exports = function(app){
    const post = require('../controllers/postController');

    //blog post Routes
    app.route('/api/blogpost')
        .get(post.getAllPosts)
        .post(post.createPost);

    app.route('/api/blogpost/:id')
        .get(post.getPostByID)
        .put(post.updatePost)
        .delete(post.deletePost);

};