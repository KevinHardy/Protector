var app = angular.module('ProtectorApp');

app.controller('forumCtrl', ["$scope", "$firebase", "$firebaseArray", "forumService", "$rootScope", function($scope, $firebase, $firebaseArray, forumService, $rootScope) {

	//$scope.test = "Welcome to the Protector Forum!";

	//var ref = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/users");
	$scope.user = $rootScope.user;

	$scope.isLoggedIn = $rootScope.isLoggedIn;

	//var index = 0;
	//$scope.posts = [];
	var messages = $firebaseArray(new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages"));
	$scope.posts = messages;

	//var messagesRef = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages")

	$scope.addPost = function(title, body) {
		//console.log($rootScope.isLoggedIn);
		//console.log($rootScope.user);
		$scope.newPost.username = $rootScope.user;
		
		$scope.newPost.timestamp = Date.now();
		//$scope.newPost.comments = [];
		//$scope.newPost.index = index++;

		var comments = $firebaseArray(new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages/comments"));

		messages.$add($scope.newPost);

		//console.log($scope.newPost);

		$scope.reset();
	}

	$scope.reset = function() {
		$scope.newPost = {};
	}

/*I am getting an error saying this is not a function*/
	$scope.submitComment = function(index, comment) {
		//var comments = $firebaseArray(new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages" + index + "/comments"));

		//$scope.posts[index].comments.push(comment);
		comments.$add(comment);

		$scope.posts[index].commentForm = '';
	}

}]);