(function() {
	angular
		.module("BlogApp",[])
		.controller("BlogController",BlogController);

		function BlogController($scope, $http){
			$scope.createPost = createPost;

			$scope.deletePost = deletePost;
			$scope.editPost = editPost;
			$scope.updatePost = updatePost;


			$scope.busyEditing = false;

			function init(){
				getAllPosts();
			}
			init();

			function updatePost(post){
				$scope.busyEditing = false;
				console.log(post);
				$http
					.put("/api/blogpost/"+post._id, post);
					//add success/failure promises
					getAllPosts();
			}




			function editPost(postID){
				$http
					.get("/api/blogpost/" + postID)
					.then(function(post){
						$scope.post = post.data;
						$scope.busyEditing = true;
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