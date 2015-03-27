var app = angular.module('ProtectorApp');

app.controller('forumCtrl', function($scope) {

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

})