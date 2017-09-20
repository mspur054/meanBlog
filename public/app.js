(function() {
	angular
		.module("BlogApp",[])
		.controller("BlogController",BlogController);

		function BlogController($scope, $http){
			$scope.createPost = createPost;

			$scope.deletePost = deletePost;
			$scope.editPost = editPost;


			function init(){
				getAllPosts();
			}
			init();


			function editPost(postID){
				$http
					.get("/api/blogpost/" + postID)
					.then(function(post){
						$scope.post = post.data;
					}, function(error){
						console.log(error);
					});
			}


			function deletePost(postID){
				$http
					.delete("/api/blogpost/" + postID)
					.then(function(){
						getAllPosts();
					},function(error){
						console.log(error);
					});
			}


			function getAllPosts(){
				$http
					.get("/api/blogpost")
					.then(function(posts){
						$scope.posts = posts.data;
					}, function(error){
						console.log(error);
					});
			}

			function createPost(post) {
				$http
					.post("/api/blogpost", post)
					.then(function(){
						getAllPosts();
					}, function(error){
						console.log(error);
					});

			}
		}
})();