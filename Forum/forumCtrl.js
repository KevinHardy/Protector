var app = angular.module('ProtectorApp');

app.controller('forumCtrl', ["$scope", "$firebase", "$firebaseArray", "forumService", "$rootScope", function($scope, $firebase, $firebaseArray, forumService, $rootScope) {

	//$scope.test = "Welcome to the Protector Forum!";

	var ref = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/users");
	/*var user = ref.getAuth();
	var username = ref.child('name');
	username.once('value', function(snap) {
		var user = snap.val();
		if (!user) {
			return;
		}

		form.find('#name').val(user.name);
		form.find('#posts').val(user.posts);
		form.find('#comments').val(user.comments);
	})*/

	$scope.isLoggedIn = $rootScope.isLoggedIn;

	$scope.posts = [];
	/*var messages = $firebaseArray(new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages"));
	$scope.posts = messages;*/

	//var messagesRef = new Firebase("https://kmhardy-books.firebaseIO.com/ProtectorApp/messages")

	$scope.addPost = function(title, body) {
		//console.log($rootScope.isLoggedIn);
		//$scope.newPost.name = username;
		$scope.newPost.timestamp = Date.now();
		$scope.newPost.comments = [];
		
		$scope.posts.push($scope.newPost)

		console.log($scope.posts);
		//console.log($scope.newPost);

		$scope.reset();
	}

	$scope.reset = function() {
		$scope.newPost = {};
	}

	$scope.submitComment = function(index, comment) {
		$scope.posts[index].comments.push(comment);
		$scope.posts[index].commentForm = '';
	}

}]);