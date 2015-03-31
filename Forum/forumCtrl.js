var app = angular.module('ProtectorApp');

app.controller('forumCtrl', /*'ForumService',*/ function($scope /*ForumService*/) {

	
	var ref = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp");
	/*var authData = ref.getAuth();

	if (authData) {
		console.log("Authenticated user with uid:", authData.uid);
		//$scope.getUser(authData.uid);
	}*/

	//$scope.test = "Welcome to the Protector Forum!";
	$scope.posts = [];

	$scope.addPost = function() {
		$scope.newPost.timestamp = Date.now();
		$scope.newPost.comments = [];
		console.log($scope.newPost);

		$scope.posts.push($scope.newPost);
		console.log($scope.posts);

		//$scope.reset();
	}

	$scope.reset = function() {
		$scope.newPost = {};
	}

	$scope.submitComment = function(index, comment) {
		$scope.posts[index].comments.push(comment);
		$scope.posts[index].commentForm = '';
	}

});